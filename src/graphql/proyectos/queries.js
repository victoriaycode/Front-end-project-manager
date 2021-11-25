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

export { GET_PROJECTS_CARDS,GET_PROJECT_INFO };