import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/auth.operation';
import { getUser } from 'redux/auth/auth.selectors';

export const UserNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/register');
  };
  const user = useSelector(getUser);
  return (
    <div>
      <p>Wellcome, {user}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
