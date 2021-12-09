import { gql } from '@apollo/client';
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
export { FILTRAR_INSCRIPCIONES_PROYECTO};