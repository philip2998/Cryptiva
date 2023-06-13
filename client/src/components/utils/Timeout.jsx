import { useEffect } from 'react';

const Timeout = ({ timeout, onTimeout }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onTimeout && typeof onTimeout === 'function') {
        onTimeout();
      }
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  return null;
};

export default Timeout;
