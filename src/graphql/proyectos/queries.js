import { gql } from '@apollo/client';

const GET_PROYECTOS_CARDS = gql`

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


const GET_PROYECTO_INFO = gql`


query Proyectos {
    Proyectos {
      _id
      nombre
      presupuesto
      fechaInicio
      fechaFin
      estado
      fase
      objetivos {
        _id
         tipo
        descripcion
       
      }
      lider {
        apellido
        nombre
      }
    
    }
    
  
  }
  
`;


export { GET_PROYECTOS_CARDS,GET_PROYECTO_INFO };