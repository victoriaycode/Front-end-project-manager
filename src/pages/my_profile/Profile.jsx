import Title_page from "components/Title_page";
import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  EDIT_MI_USUARIO,
  GET_USUARIO,
  EDIT_CONTRASENA,
} from "graphql/usuarios/queries";
import useFormData from "hooks/useFormData";
import { toast } from "react-toastify";
import ButtonLoading from "components/ButtonLoading";
import { useUser } from "context/userContext";

const Profile = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const [nuevaPass, setNuevaPass] = useState("");
  const [editable, setEditable] = useState(true);
  const { userData } = useUser();

  const _id = userData._id;

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_USUARIO, {
    variables: { _id },
  });

  useEffect(() => {
    console.log("data servidor", queryData);
  }, [queryData]);

  const [
    edicion,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(EDIT_MI_USUARIO);

  const [
    edicionContrasena,
    { data: mutationData2, loading: mutationLoading2, error: mutationError2 },
  ] = useMutation(EDIT_CONTRASENA);

  /*   const contrasenaIgual = () => {
    if (formData.nuevaPassword != formData.nuevaPassword2) {
      alert("Passwords must be the same");
      formData.nuevaPassword.focus();
      return true;
    } else {
      return false;
    }
  }; */

  const editarContrasena = () => {
    console.log("Passs", nuevaPass);
    if (nuevaPass != "") {
      let password = nuevaPass;
      edicionContrasena({
        variables: { _id, password },
      });
    }
    setEditable(true)
  };

  const submitForm = (e) => {
    console.log("form data", formData);

    e.preventDefault();
    delete formData.rol;

    edicion({
      variables: { _id, ...formData },
    });
  };

  useEffect(() => {
    if (mutationData) {
      toast.success("Usuario modificado correctamente");
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationData2) {
      toast.success("Contraseña modificada correctamente");
    }
  }, [mutationData2]);


  useEffect(() => {
    if (mutationError) {
      toast.error("Error modificando el usuario");
    }
    if (queryError) {
      toast.error("Error consultando el usuario");
    }
  }, [queryError, mutationError]);

  if (queryLoading) return <div>Cargando....</div>;

  return (
    <div className="w-full h-full flex flex-col ">
      <Title_page
        title={"Mi Perfil"}
        returns={true}
        return_to={"/usuarios"}
      ></Title_page>
      <div className="flex-col m-auto w-40 -my-1">
        <img src="https://img.icons8.com/bubbles/200/000000/edit-user.png" />
      </div>
      <form
        className="w-full  max-w-sm self-center"
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
      >
        <div className="md:flex md:items-center mb-6 ">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Nombre
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="nombre"
              type="text"
              defaultValue={queryData.Usuario.nombre}
              required={true}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Apellido
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="apellido"
              type="text"
              defaultValue={queryData.Usuario.apellido}
              required={true}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Identificación
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="identificacion"
              type="text"
              defaultValue={queryData.Usuario.identificacion}
              required={true}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Coreo eléctronico
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="correo"
              type="email"
              defaultValue={queryData.Usuario.correo}
              required={true}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Rol del usuario
            </label>
          </div>
          <div className="md:w-2/3">
            <label
              className="text-red-700 py-2 px-4 font-bold md:text-right mb-1 md:mb-0"
              for="inline-full-name"
            >
              {queryData.Usuario.rol}
            </label>
          </div>
        </div>
        <div className="flex m-auto justify-center w-2/3 mb-4">
            <ButtonLoading
              disabled={Object.keys(formData).length === 0}
             
              text="Editar datos" 
              className={
                "w-3/4 h-10 bg-yellow-500 text-white font-semibold text-xl mb-6 rounded-lg hover:bg-yellow-600  shadow-md disabled:opacity-50 disabled:bg-gray-700"
              }
            />
        </div>
        {editable ? (
          <div className="m-auto md:w-2/3 ">
            <button
              className={
                "w-full h-10 bg-white text-indigo-600 font-semibold text-xl mb-6 rounded-lg hover:bg-gray-200  shadow-md disabled:opacity-50 disabled:bg-gray-700"
              }
              onClick={() => setEditable(false)}
            >
              ¿Cambiar contraseña?
            </button>
          </div>
        ) : (
          <>
            {
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Nueva contraseña
                  </label>
                </div>
                <div className="flex flex-wrap md:w-2/3">
                  <input
                    type="password"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-3/5 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={nuevaPass}
                    onChange={(e) => setNuevaPass(e.target.value)}
                    placeholder="*******"
                  />
                  <button className="m-auto" onClick={() => editarContrasena()}>
                    <img src="https://img.icons8.com/emoji/40/000000/check-mark-emoji.png" />
                  </button>
                  <button className="m-auto" onClick={() => setEditable(true)}>
                    <img src="https://img.icons8.com/ios-filled/32/fa314a/x.png" />
                  </button>
                </div>
              </div>
            }
          </>
        )}
     
      

      </form>
    </div>
  );
};

export default Profile;