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

const FILTRAR_INSCRIPCIONES_PROYECTO = gql`
query FiltrarInscripcionesPorProyecto($idProyecto: String!) {
    filtrarInscripcionesPorProyecto(idProyecto: $idProyecto) {
      _id
      fechaIngreso
      fechaEgreso
      estudiante {
        _id
        nombre
        apellido
        identificacion
        correo
  
      }
      proyecto{
        nombre
      }
    }
  }
`;
export {GET_INSCRIPCIONES,FILTRAR_INSCRIPCIONES_PROYECTO};