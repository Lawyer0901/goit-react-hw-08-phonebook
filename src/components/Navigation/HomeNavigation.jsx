import { useSelector } from 'react-redux';
import { StyledLink } from './Navigation.styled';
import { getIsLogedIn } from 'redux/auth/auth.selectors';

export const HomeNavigation = () => {
  const isLogedIn = useSelector(getIsLogedIn);
  return (
    <nav>
      <ul>
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
