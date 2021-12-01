import { createContext, useContext } from 'react';

export const ProjectContext = createContext(null);

export const useProject = () => {
  
  return useContext(ProjectContext);
};
