import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogedIn, getIsRefreshing } from 'redux/auth/auth.selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogedin = useSelector(getIsLogedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const shouldRedirect = !isLogedin && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
