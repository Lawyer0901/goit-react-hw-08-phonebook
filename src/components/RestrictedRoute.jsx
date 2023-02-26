import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogedIn } from 'redux/auth/auth.selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogedin = useSelector(getIsLogedIn);
  // const isRefreshing = useSelector(getIsRefreshing);
  return isLogedin ? <Navigate to={redirectTo} /> : <Component />;
};
