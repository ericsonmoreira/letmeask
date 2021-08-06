import { AuthContext } from 'context/AuthContext';
import { useContext } from 'react';

function useAuth() {
  const value = useContext(AuthContext);

  return value;
}

export default useAuth;
