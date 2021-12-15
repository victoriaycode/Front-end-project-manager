
import { useMutation } from '@apollo/client';
import { Zoom } from '@material-ui/core';
import { GET_PROJECTS_BY_LIDER } from 'graphql/proyectos/queries';
import { EDIT_PROJECT_BY_ADMIN } from 'graphql/proyectos/queries';
import useFormData from 'hooks/useFormData';
import moment from 'moment';
import React, { useState, useEffect } from 'react'

const Edit_project_admin_modal = ({ idProyecto, fechaInicio, fechaFin, initialState, initialFase, nombreProyecto, setOpenModalEdit }) => {
    const [cambiarEstado, setCambiarEstado] = useState(false);
    const [terminarProyecto, setTerminarProyecto] = useState(false);

    const { form, formData, updateFormData } = useFormData(null);


    var dateNow = new Date();

    // const [editProjectAdmin, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    //     useMutation(EDIT_PROJECT_BY_ADMIN);

        const [editProjectAdmin, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(EDIT_PROJECT_BY_ADMIN,{refetchQueries:[{ query: GET_PROJECTS_BY_LIDER }]});

    const submitChangeState = (e) => {
        e.preventDefault();
        if (formData.estado != null) {
            if (formData.estado == "INACTIVO" && initialState!=="INACTIVO") {
                formData.fechaFin = dateNow;
            }
            const edited = editProjectAdmin({
                variables: { idProyecto, ...formData },
            });
            setOpenModalEdit(false);
        }
    };
    const finalizarProjecto = async () => {
        if (initialFase === "DESARROLLO") {
            const edited = editProjectAdmin({
                variables: {
                    idProyecto, "fase": "TERMINADO",
                    "estado": "INACTIVO", "fechaFin": dateNow
                },
            });
        }
        setOpenModalEdit(false);
    }
    useEffect(() => {


        console.log("editado", mutationData);
    }, [mutationData]);
    useEffect(() => {

        console.log("error", mutationError);


    }, [mutationError]);
    if (mutationLoading) return <div>Cargando....</div>;
    return (

        <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">

            <div className="bg-white rounded shadow-lg w-3/6 ">

                <div className="border-b px-4 py-2 flex justify-between items-center">
                    <h3 className="font-semibold text-lg text-blue-800 ">Editar Proyecto:
                        <span className="text-blue-800 font-bold text-xl uppercase"> {nombreProyecto}</span></h3>
                    <button className="text-black hover:text-blue-700" onClick={() => setOpenModalEdit(false)}><i class="far fa-times-circle fa-2x"></i></button>
                </div>

                <div className="px-20 h-auto py-3">
                    <div className="flex flex-col ">

                        {/**editar estado */}
                        <div className="flex flex-row justify-start  gap-10 mb-4 px-20 text-lg pb-2">
                            <span className="font-bold pt-2">Estado Actual:<span className="text-blue-800 font-bold text-2xl ml-2"> {initialState}</span></span>
                            {!cambiarEstado &&
                                <button type="button" className="text-white bg-blue-700 
                            hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 
                            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => setCambiarEstado(true)}>
                                    Cambiar Estado</button>}

                        </div>
                        {cambiarEstado &&
                            <form
                                onSubmit={submitChangeState}
                                onChange={updateFormData}
                                ref={form}>


                                <div className="flex flex-row border-b-2 border-solid border-gray-300 pb-4">
                                    <div className="flex flex-row justify-center gap-10 px-20">
                                        <div>
                                            <input type="radio" className="h-6 w-6 mr-1 " id="activo" name="estado" value="ACTIVO"
                                            />
                                            <label className="text-lg text-green-500" for="activo"><i className="far fa-calendar-check fa-2x"></i> ACTIVO</label>

                                        </div>

                                        <div>
                                            <input type="radio" className="h-6 w-6 mr-1" id="inactivo" name="estado" value="INACTIVO"
                                            />
                                            <label className="text-lg text-red-400" for="inactivo"><i className="far fa-calendar-check fa-2x"></i> INACTIVO</label>

                                        </div>


                                    </div>
                                    <div className="flex flex-row  h-12 gap-2" >
                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 disabled:opacity-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            disabled={Object.keys(formData).length === 0}> Guardar</button>


                                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:bg-gray-800 dark:hover:bg-gray-700 
                                        dark:focus:ring-gray-800 dark:border-gray-700"   onClick={() => setCambiarEstado(false)}>
                                            Cancelar</button>
                                    </div>
                                </div>
                            </form>}
                    </div>

                    {/**Cambiar fase desarrollo a terminado */}
                    <div className="flex flex-col mt-2 ">


                        <div className="flex flex-row justify-start  gap-10 mb-4 px-20 text-lg pb-2 ">
                            <span className="font-bold pt-2">Fase Actual:<span className="text-blue-800 font-bold text-2xl ml-2"> {initialFase}</span></span>
                            {!terminarProyecto && initialFase == "DESARROLLO" &&
                                <button type="button" className="text-white bg-blue-700 
                            hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 
                             disabled:opacity-50 disabled:bg-gray-700"
                                    onClick={() => setTerminarProyecto(true)}>
                                    Terminar proyecto</button>}
                            {!terminarProyecto && initialFase !== "DESARROLLO" &&
                                <button type="button" disabled className="text-white bg-blue-700 
                            hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 
                             opacity-30 bg-gray-700"
                                    onClick={() => setTerminarProyecto(true)}>
                                    Terminar proyecto</button>}

                        </div>
                        {terminarProyecto && initialFase == "DESARROLLO" &&
                            <div className="flex flex-row border-b-2 border-solid border-gray-300 py-4 border-t-2 border-solid-2 border-blue-300">
                                <div className="flex flex-col justify-center px-20 ">
                                    <span className="text-blue-800 text-2xl font-bold">¿Está seguro de terminar el proyecto? </span>
                                    <span className="text-gray-800 text-xl ">No se podrá deshacer. </span>



                                </div>
                                <div className="flex flex-row  h-12 gap-2 mt-14" >
                                    <button type="button" className="text-white w-32 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                            py-2.5 text-center mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onClick={() => finalizarProjecto()}> Si, terminar</button>


                                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:bg-gray-800 dark:hover:bg-gray-700 
                                        dark:focus:ring-gray-800 dark:border-gray-700"   onClick={() => setTerminarProyecto(false)}>
                                        Cancelar</button>
                                </div>
                            </div>}

                        <span className="text-gray-800 ml-4" >Nota: Sólo se podrá terminar un proyecto cuando este en fase de desarrollo. </span>
                        <div className="flex flex-col mt-2">
                            <span className="text-blue-800 ml-4" >Fecha de Inicio:
                                <span className="text-gray-700 ml-4">{fechaInicio === null ? (" Sin fecha aún") : (" " + moment(fechaInicio).format('DD/MM/YY hh:mm a'))}</span></span>
                            <span className="text-blue-800 ml-4" >Fecha de Terminación:
                                <span className="text-gray-700 ml-4">{fechaFin === null ? (" Sin fecha aún") : (" " + moment(fechaFin).format('DD/MM/YY hh:mm a'))}</span></span>
                        </div>

                    </div>

                </div>


            </div>

        </div>

    )
}

export default Edit_project_admin_modal
