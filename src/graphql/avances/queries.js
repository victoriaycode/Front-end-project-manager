import { gql } from '@apollo/client';

// const  NAME =gql``;

const  LIST_ADVANCES_OF_PROJECT =gql`
query($filtrarAvanceId: String!) {
    filtrarAvance(_id: $filtrarAvanceId) {
      _id
      titulo
      
      creadoPor {
        nombre
        apellido
        identificacion
        correo
      }
      fecha
    }
  }
  `;
  const  GET_ADVANCE_BY_ID =gql`
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
  export {LIST_ADVANCES_OF_PROJECT,GET_ADVANCE_BY_ID};