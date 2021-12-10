import Title_page from "components/Title_page";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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
/*   const estado = userData.estado; */
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
    console.log(form.data)
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
      <form
        class="w-full  max-w-sm self-center"
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
      >
        <div class="md:flex my-3 md:items-center mb-6 ">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Nombre
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="nombre"
              type="text"
              defaultValue={queryData.Usuario.nombre}
              required={true}
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Apellido
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="apellido"
              type="text"
              defaultValue={queryData.Usuario.apellido}
              required={true}
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Identificacion
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="identificación"
              type="text"
              defaultValue={queryData.Usuario.identificacion}
              required={true}
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Coreo eléctronico
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="correo"
              type="email"
              defaultValue={queryData.Usuario.correo}
              required={true}
            />
          </div>
        </div>

        {/* <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Estado
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="estado"
              type="text"
              value="APROBADO"
            />
          </div>
          <DropDown
          label='Estado de la persona:'
          name='estado'
          defaultValue={queryData.Usuario.estado}
          required={true}
          options={Enum_EstadoUsuario}
        />
          <br />
        </div> */}
        <span>Rol del usuario: {queryData.Usuario.rol}</span>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Editar datos
            </button>
            <ButtonLoading
              disabled={Object.keys(formData).length === 0}
              loading={mutationLoading}
              text="Editar datos"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
