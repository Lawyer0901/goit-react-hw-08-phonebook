import { useSelector } from 'react-redux';
import { StyledLink } from './Navigation.styled';
import { getIsLogedIn } from 'redux/auth/auth.selectors';

export const AuthNavigation = () => {
  const isLogedIn = useSelector(getIsLogedIn);
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="register">Register</StyledLink>
        </li>
        <li>
          <StyledLink to="login">Login</StyledLink>
        </li>
        <li>
          <StyledLink to="/home">Home</StyledLink>
        </li>
        {isLogedIn && (
          <li>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
