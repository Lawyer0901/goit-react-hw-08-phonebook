import { Route, Routes } from 'react-router-dom';
import { LayOut } from './LayOut/LayOut';
import { useEffect, lazy } from 'react';
import { refresh } from 'redux/auth/auth.operation';
import { useDispatch, useSelector } from 'react-redux';
import { getIsRefreshing } from 'redux/auth/auth.selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route
              path="/register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
