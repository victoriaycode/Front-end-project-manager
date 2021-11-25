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
  export {LIST_ADVANCES_OF_PROJECT};