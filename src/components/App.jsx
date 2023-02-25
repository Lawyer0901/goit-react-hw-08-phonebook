import { Route, Routes } from 'react-router-dom';
import { LayOut } from './LayOut/LayOut';
import { useEffect } from 'react';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import { refresh } from 'redux/auth/auth.operation';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { getIsRefreshing } from 'redux/auth/auth.selectors';

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
            <Route path="" element={<PublicRoute />}>
              {/* <Route path="" element={<p>Start</p>} /> */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route path="" element={<PrivateRoute />}>
              <Route path="/contacts" element={<Contacts />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};
