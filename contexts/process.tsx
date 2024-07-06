import { useState, type FC } from 'react';
import processDirectory from '../utils/processDirectory';
import { createContext } from 'vm';

const ProcessContext = createContext({});

const ProcessLoader: FC = () => {
  const [processes]= useState(processDirectory);
  return(
    <>
    {Object.entries(processDirectory).map(([id, { Component }]) => (
      <Component key={id} />
    ))}
    </>
);
}

export default ProcessLoader;