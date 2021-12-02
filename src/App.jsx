import React, { useState, useEffect } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import { AuthContext } from 'context/authContext';
import { setContext } from '@apollo/client/link/context';
import Index from 'pages/Index';
import jwt_decode from 'jwt-decode';


import Login from 'pages/auth/Login';
import Register from 'pages/auth/register';
import 'styles/globals.css';
import 'styles/tablausuarios.css';
import Project from 'pages/projects/Project';
import Profile from 'pages/my_profile/Profile';
import UsersDashboard from 'pages/users/UsersDashboard';
import AdvancesDashboard from 'pages/projects/advances/AdvancesDashboard';

import Students from 'pages/projects/Students';
import ProjectsList from 'pages/projects/ProjectsList';
import Advance from 'pages/projects/advances/advance';
import New_project from 'pages/projects/New_project';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import My_projects from 'pages/projects/My_projects';
// import PrivateRoute from 'components/PrivateRoute';


const httpLink = createHttpLink({
  uri: 'https://backend-dev-ocean.herokuapp.com/graphql',
});

//doc. apollo client
//Cada vez que graphql haga un request al back, vaya al local storage, busque el token y pongalo en los headers
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists. En cada request, poner el token
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink), 
});


function App() {

  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    console.log('set token', token);
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
      });
    }
  }, [authToken]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{setToken, authToken, setAuthToken}}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<PrivateLayout />}>
                <Route path='/' element={<Index />} />
                <Route path='/usuarios' element={<UsersDashboard />} />
                <Route path='/proyectos' element={<ProjectsList />} />
                <Route path='/proyectos/misproyectos' element={<My_projects/>} />
                <Route path='/proyectos/proyecto' element={<Project />} />
                <Route path='/proyectos/nuevo' element={<New_project />} />
                <Route path='/proyectos/proyecto/avances' element={<AdvancesDashboard />} />
                <Route path='/proyectos/proyecto/avances/avance' element={<Advance />} />
                <Route path='/proyectos/proyecto/info' element={<Project />} />
                <Route path='/proyectos/proyecto/estudiantes' element={<Students />} />
                
                <Route path='/mi_perfil' element={< Profile/>} />
              </Route>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
       </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
