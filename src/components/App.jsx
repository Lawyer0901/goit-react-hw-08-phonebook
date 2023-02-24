import { Route, Routes } from 'react-router-dom';
import { LayOut } from './LayOut/LayOut';
import { useEffect } from 'react';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import { refresh } from 'redux/auth/auth.operation';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
