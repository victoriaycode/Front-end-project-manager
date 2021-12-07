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
    fechaCreacion
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
const CREATE_NEW_OBJECTIVE = gql`
mutation CrearObjetivo($idProyecto: String!, $campos: camposObjetivo!) {
  crearObjetivo(idProyecto: $idProyecto, campos: $campos) {
    _id
    objetivos {
      _id
      descripcion
      tipo
    }
  }
}`;
const EDIT_PROJECT_BY_LIDER = gql`
mutation EditarProyectoPorLider($idProyecto: String!, $nombre: String, $presupuesto: Float) {
  editarProyectoPorLider(idProyecto: $idProyecto, nombre: $nombre, presupuesto: $presupuesto) {
    _id
    nombre
    presupuesto
  }
}`;

export { GET_PROJECTS_CARDS,GET_PROJECT_INFO,EDIT_PROJECT_BY_LIDER,GET_PROJECTS_BY_LIDER ,CREATE_NEW_PROJECT,CREATE_NEW_OBJECTIVE};