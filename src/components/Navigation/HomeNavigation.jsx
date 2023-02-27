import { useSelector } from 'react-redux';

import { getIsLogedIn } from 'redux/auth/auth.selectors';
import { Link, NavItem, NavList } from './UserNavigation.styled';
// import { UserNavigation } from './UserNavigation';

export const HomeNavigation = () => {
  const isLogedIn = useSelector(getIsLogedIn);
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to="/home">Home</Link>
        </NavItem>
        {isLogedIn && (
          <NavItem>
            <Link to="/contacts">Contacts</Link>
          </NavItem>
        )}
      </NavList>
    </nav>
  );
};
