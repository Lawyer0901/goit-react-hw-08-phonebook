import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
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
