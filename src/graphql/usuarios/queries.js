import { gql } from "@apollo/client";

const GET_USUARIOS = gql`
  query Usuarios {
    Usuarios {
      _id
      nombre
      apellido
      correo
      estado
      identificacion
      rol
    }
  }
`;

const GET_USUARIO = gql`
  query Usuario($_id: String!) {
    Usuario(_id: $_id) {
      _id
      nombre
      apellido
      correo
      estado
      identificacion
      rol
    }
  }
`;

const EDIT_USUARIOS = gql`
  mutation EditarUsuario(
    $_id: String!
    $nombre: String!
    $apellido: String!
    $identificacion: String!
    $correo: String!
    $estado: Enum_EstadoUsuario!
  ) {
    editarUsuario(
      _id: $_id
      nombre: $nombre
      apellido: $apellido
      identificacion: $identificacion
      correo: $correo
      estado: $estado
    ) {
      nombre
      apellido
    }
  }
`;

const EDIT_MI_USUARIO = gql`
  mutation editarMiUsuario(
    $_id: String!
    $nombre: String
    $apellido: String
    $identificacion: String
    $correo: String
  ) {
    editarMiUsuario(
      _id: $_id
      nombre: $nombre
      apellido: $apellido
      identificacion: $identificacion
      correo: $correo
    ) {
      nombre
      apellido
    }
  }
`;

export { GET_USUARIOS, GET_USUARIO, EDIT_USUARIOS, EDIT_MI_USUARIO};
