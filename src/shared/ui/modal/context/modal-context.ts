import { createContext, useContext } from 'react';

type ModalContext = {
  handleClose: () => void;
};
export const ModalContext = createContext<ModalContext | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Child components of Modal cannot be rendered outside of the Modal component!');
  }

  return context;
};
