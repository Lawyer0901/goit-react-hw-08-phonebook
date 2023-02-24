import { Route, Routes } from 'react-router-dom';
import { LayOut } from './LayOut/LayOut';
// import HomePage from 'pages/HomePage';
// import UsersPage from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';

export const App = () => {
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
