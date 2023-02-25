import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from 'redux/auth/auth.selectors';

const PrivateRoute = () => {
  const token = useSelector(getToken);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
