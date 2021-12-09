import { gql } from '@apollo/client';


const GET_INSCRIPCIONES = gql`
  query Inscripciones {
    Inscripciones {
      _id
      estado
      fechaIngreso
      fechaEgreso
      estudiante {
        _id
        nombre
        apellido
        correo
        identificacion
      }
      proyecto {
        _id
        nombre
        lider {
          _id
        }
      }
    }
  }
`;


export {GET_INSCRIPCIONES};