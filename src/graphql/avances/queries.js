import { gql } from '@apollo/client';

// const  NAME =gql``;

const LIST_ADVANCES_OF_PROJECT = gql`
query FiltrarAvance($idProject: String!) {
  filtrarAvance(idProject: $idProject) {
      _id
      titulo
      creadoPor {
        nombre
        apellido
        identificacion
        correo
      }
      fecha
    } }
  `;
const GET_ADVANCE_BY_ID = gql`
  query ($_idAvance: String!)   {
    filtrarAvancePorId(_idAvance: $_idAvance) {
      _id
      fecha
      titulo
      descripcion
      observaciones
      creadoPor{
        _id
        nombre
        apellido
      }
    }
  }
  `;

const EDIT_ADVANCE_BY_STUDENT = gql`
  mutation($_idAvance: String!, $titulo: String!, 
    $descripcion: String!) {
    editarAvanceEstudiante(_idAvance: $_idAvance, titulo: $titulo, 
      descripcion: $descripcion) {
      titulo
      descripcion
    }
  }`;


const ADD_NEW_OBSERVATION = gql`
  mutation Mutation($_idAvance: String!, $observacion: String!) {
    addNewObservacionAvance(_idAvance: $_idAvance, 
      observacion: $observacion) {
      _id
      observaciones
    }
  }`;

const CREATE_NEW_ADVANCE = gql`
  mutation CrearAvance($fecha: Date!, $titulo: String!,
     $descripcion: String!, $proyecto: String!, $creadoPor: String!) {
    crearAvance(fecha: $fecha, titulo: $titulo, 
      descripcion: $descripcion, proyecto: $proyecto, 
      creadoPor: $creadoPor) {
      _id
      descripcion
      titulo
    }
  }`;


export { LIST_ADVANCES_OF_PROJECT, GET_ADVANCE_BY_ID, EDIT_ADVANCE_BY_STUDENT,
   ADD_NEW_OBSERVATION, CREATE_NEW_ADVANCE };