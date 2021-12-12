import Title_page from "components/Title_page";
import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { EDIT_MI_USUARIO, GET_USUARIO } from "graphql/usuarios/queries";
import useFormData from "hooks/useFormData";
import { toast } from "react-toastify";
import ButtonLoading from "components/ButtonLoading";
import { useUser } from "context/userContext";

const Profile = () => {
  const { form, formData, updateFormData } = useFormData(null);
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

  const submitForm = (e) => {
    console.log(form.data);
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
    if (mutationError) {
      toast.error("Error modificando el usuario");
    }

    if (queryError) {
      toast.error("Error consultando el usuario");
    }
  }, [queryError, mutationError]);

  if (queryLoading) return <div>Cargando....</div>;

  return (
    <div className="w-full h-full flex flex-col overflow-y-hidden ">
      <Title_page
        title={"Mi Perfil"}
        returns={true}
        return_to={"/usuarios"}
      ></Title_page>
      <div className="flex-col m-auto -my-1"><img src="https://img.icons8.com/bubbles/200/000000/edit-user.png"/></div>
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
              Nueva contraseña
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
              placeholder="*********"
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
              className="text-blue-700 py-2 px-4 font-bold md:text-right mb-1 md:mb-0"
              for="inline-full-name"
            >
              {queryData.Usuario.rol}
            </label>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <ButtonLoading
              disabled={Object.keys(formData).length === 0}
              loading={mutationLoading}
              text="Editar datos"
              className={"w-32 h-10 bg-yellow-500 text-white font-semibold text-xl mb-6 rounded-lg hover:bg-yellow-600  shadow-md disabled:opacity-50 disabled:bg-gray-700"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;