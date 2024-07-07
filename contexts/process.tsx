import { useState, type FC } from 'react';
import processDirectory from '../utils/processDirectory';
import { createContext } from 'react';
import { Process } from '../types/processDirectory';

type ProcessContextState = {
  processes: Partial<Process>
}
export const ProcessContext = createContext<ProcessContextState>({processes:{}});


export const ProcessProvider: FC = ({ children }:any) => {
  const [processes]= useState(processDirectory);
  return(
    <ProcessContext.Provider value={{processes}} >
      {children}
    </ProcessContext.Provider>
);
}
export const ProcessConsumer = ProcessContext.Consumer;
// export default ProcessProvider;