import { StyledLink } from './Navigation.styled';

export const AuthNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="register">Register</StyledLink>
        </li>
        <li>
          <StyledLink to="login">Login</StyledLink>
        </li>
      </ul>
    </nav>
  );
};
