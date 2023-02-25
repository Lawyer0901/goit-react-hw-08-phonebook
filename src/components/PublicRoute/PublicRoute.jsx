import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from 'redux/auth/auth.selectors';

const PublicRoute = () => {
  const token = useSelector(getToken);

  return token ? <Navigate to="/contacts" replace /> : <Outlet />;
};
export default PublicRoute;
