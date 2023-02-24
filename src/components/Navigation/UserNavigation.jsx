import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth.operation';
import { getUser } from 'redux/auth/auth.selectors';

export const UserNavigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  return (
    <div>
      <p>{user}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
