import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/auth.operation';
import { getUser } from 'redux/auth/auth.selectors';
import { LogOutBtn } from './UserNavigation.styled';
import { UserContainer } from './UserNavigation.styled';

export const UserNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/register');
  };
  const user = useSelector(getUser);
  console.log(user);
  if (user === null) {
    return;
  }
  return (
    <UserContainer>
      <p>Wellcome, {user}</p>
      <LogOutBtn onClick={handleLogout}>Logout</LogOutBtn>
    </UserContainer>
  );
};
