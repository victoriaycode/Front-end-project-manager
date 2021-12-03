import { gql } from '@apollo/client';


const GET_PROJECTS_CARDS = gql`

query Proyectos {
    Proyectos {
      _id
      nombre
      estado
      fase
      lider {
        apellido
        nombre
      }
    }
}
`;


const GET_PROJECT_INFO = gql`
query Proyecto($_id: String!) {
  filtrarProyecto(_id: $_id) {
    _id
    nombre
    presupuesto
    estado
    fase
    lider{
      nombre
      apellido
      identificacion
    }
    fechaInicio
    fechaFin
    objetivos {
      tipo
      descripcion
    }
  }
}`;

const GET_PROJECTS_BY_LIDER = gql`

query Proyecto($id_lider: String!) {
  filtrarProyectoPorLider(id_lider: $id_lider) {
    lider{
      nombre
      apellido
      identificacion
    }
    
  }
}`;
const CREATE_NEW_PROJECT = gql`
mutation Mutation($nombre: String!, $presupuesto: Float!, $estado: Enum_EstadoProyecto!, $fase: Enum_FaseProyecto!, $lider: String!) {
  crearProyecto(nombre: $nombre, presupuesto: $presupuesto, estado: $estado, fase: $fase, lider: $lider) {
    _id
    nombre
    presupuesto
    fechaCreacion
    objetivos{
      tipo
      descripcion
    }
  }
}`;
export { GET_PROJECTS_CARDS,GET_PROJECT_INFO,GET_PROJECTS_BY_LIDER ,CREATE_NEW_PROJECT};