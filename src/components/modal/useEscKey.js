import { useEffect } from 'react';

export const useEscKey = (handleClose) => {
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        handleClose(false);
      }
    };

    window.addEventListener('keyup', close);
    return () => window.removeEventListener('keyup', close);
  }, [handleClose]);
};
