import { Route, Routes } from 'react-router-dom';
import { LayOut } from './LayOut/LayOut';
import HomePage from 'pages/HomePage';
import UsersPage from 'pages/Register';
import Login from 'pages/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<UsersPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<p>contact page</p>} />
      </Route>
    </Routes>
  );
};
