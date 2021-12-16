import SidebarNav from 'components/SidebarNav';
import { Outlet } from 'react-router';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { useAuth } from 'context/authContext';
import { REFRESH_TOKEN } from 'graphql/auth/mutation';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const PrivateLayout = () => {

  const navigate = useNavigate();
  const { authToken, setToken } = useAuth();
  const [loadingAuth, setLoadingAuth] = useState(true);

  const [refreshToken, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(REFRESH_TOKEN);

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  useEffect(() => {
    if (dataMutation) {
      if (dataMutation.refreshToken.token) {
        setToken(dataMutation.refreshToken.token);
      } else {
        setToken(null);
        navigate('/login');
      }
      setLoadingAuth(false);
    }
  }, [dataMutation, setToken, loadingAuth, navigate]);

  if (loadingMutation || loadingAuth) return <div>Loading...</div>;
  
  return (
    <div className='flex flex-row flex-no-wrap h-screen bg-gray-100 '>
      <SidebarNav />
      <div className='flex w-full h-full ml-1 '>
        <div className='w-full h-full  overflow-y-scroll'>
          <Outlet />
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default PrivateLayout;
