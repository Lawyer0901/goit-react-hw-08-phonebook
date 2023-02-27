// import { LinkToRegisterPage } from 'components/Link';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Container } from 'components/Navigation/UserNavigation.styled';
import { Text } from 'components/Text';

import { useSelector } from 'react-redux';
import { getIsLogedIn } from 'redux/auth/auth.selectors';
import Box from '@mui/material/Box';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Home = () => {
  const isLogedIn = useSelector(getIsLogedIn);
  return (
    <Container>
      {isLogedIn ? (
        <Text />
      ) : (
        <Box
          sx={{
            minHeight: 'calc(100vh - 60px)',
            marginTop: '-7px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <LoginForm />

          <Typography
            variant="h6"
            component="h6"
            sx={{ color: '#1976d2', marginTop: '4px' }}
          >
            Don't have an account yet?
          </Typography>
          <NavLink
            to="/register"
            style={{
              marginTop: '8px',
              color: '#1976d2',
              width: '364px',
              textAlign: 'center',
              fontWeight: '400',
              border: '1px solid #1976d2',
            }}
          >
            <Typography variant="h6" component="h6">
              Register
            </Typography>
          </NavLink>
        </Box>
      )}
    </Container>
  );
};

export default Home;
