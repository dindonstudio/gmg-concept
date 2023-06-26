import { useState, useEffect } from 'react';

export function useAddRemoveOpacity() {
  const [addRemoveOpacity, setAddRemoveOpacity] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddRemoveOpacity(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return addRemoveOpacity;
}
