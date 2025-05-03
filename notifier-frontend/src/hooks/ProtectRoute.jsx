import useAuthStore from './useAuthStore';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const token = useAuthStore(state => state.token);
  return token ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;