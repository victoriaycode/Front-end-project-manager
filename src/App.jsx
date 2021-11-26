import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import Index from 'pages/Index';

import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import 'styles/globals.css';
import 'styles/tablausuarios.css';
import Project from 'pages/projects/Project';
import Profile from 'pages/my_profile/Profile';
import UsersDashboard from 'pages/users/UsersDashboard';
import AdvancesDashboard from 'pages/projects/advances/AdvancesDashboard';

import Students from 'pages/projects/Students';
import ProjectsList from 'pages/projects/ProjectsList';
import Advance from 'pages/projects/advances/Advance';
import New_project from 'pages/projects/New_project';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import My_projects from 'pages/projects/My_projects';
import Info from 'pages/projects/Info';
{/**
  const client = new ApolloClient({
  uri: 'https://backend-dev-ocean.herokuapp.com/graphql', 
  cache: new InMemoryCache(),
});
 */}


 const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});


// import PrivateRoute from 'components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});
  const [actualProject, setActualProject] = useState([]);
  return (
    <ApolloProvider client={client}>
        <UserContext.Provider value={{ userData, setUserData }}>
        
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<PrivateLayout />}>
                <Route path='/inicio' element={<Index />} />
                <Route path='/usuarios' element={<UsersDashboard />} />
               
                <Route path='/proyectos' element={<ProjectsList />} />
                <Route path='/proyectos/misproyectos' element={<My_projects/>} />
                <Route path='/proyectos/proyecto/:_id' element={<Info />} />
                <Route path='/proyectos/nuevo' element={<New_project />} /> 
               
                <Route path='/proyectos/proyecto/avances/:_id' element={<AdvancesDashboard />} />
                <Route path='/proyectos/proyecto/avances/n/:_id/:_idAvance' element={<Advance />} />
  
                <Route path='/proyectos/proyecto/estudiantes/:_id' element={<Students />} />
                
                <Route path='/mi_perfil' element={< Profile/>} />
              </Route>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
