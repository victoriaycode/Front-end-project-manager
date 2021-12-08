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
      _id
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
mutation Mutation($idProyecto: String!, $tipo: String!, $descripcion: String!) {
  crearObjetivo(idProyecto: $idProyecto, tipo: $tipo, descripcion: $descripcion) {
    _id
    
  }
}`;
const EDIT_OBJECTIVE = gql`
mutation Mutation($idProyecto: String!, $indexObjetivo: Int!, $tipo: String!, $descripcion: String!) {
  editarObjetivo(idProyecto: $idProyecto, indexObjetivo: $indexObjetivo, tipo: $tipo, descripcion: $descripcion) {
    _id
    
  }
}`;
const DELETE_OBJECTIVE = gql`
mutation Mutation($idProyecto: String!, $idObjetivo: String!) {
  eliminarObjetivo(idProyecto: $idProyecto, idObjetivo: $idObjetivo) {
    _id
    
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
const EDIT_PROJECT_BY_ADMIN = gql`

mutation EditarProyectoPorAdmin($idProyecto: String!, $estado: Enum_EstadoProyecto, $fase: Enum_FaseProyecto, $fechaInicio: Date, $fechaFin: Date) {
  editarProyectoPorAdmin(idProyecto: $idProyecto, estado: $estado, fase: $fase, fechaInicio: $fechaInicio, fechaFin: $fechaFin) {
    _id
    fechaInicio
    fechaFin
    estado
    fase
  }
}`;
export { GET_PROJECTS_CARDS,GET_PROJECT_INFO,
  EDIT_PROJECT_BY_LIDER,EDIT_PROJECT_BY_ADMIN,
  GET_PROJECTS_BY_LIDER ,
  CREATE_NEW_PROJECT,CREATE_NEW_OBJECTIVE,EDIT_OBJECTIVE,DELETE_OBJECTIVE};