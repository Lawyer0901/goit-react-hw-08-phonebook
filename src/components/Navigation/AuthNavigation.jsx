// import { StyledLink } from './Navigation.styled';
import { NavList, NavItem, Link } from './UserNavigation.styled';

export const AuthNavigation = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to="register">Register</Link>
        </NavItem>
        <NavItem>
          <Link to="login">Login</Link>
        </NavItem>
      </NavList>
    </nav>
  );
};
