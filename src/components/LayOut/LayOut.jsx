import { AuthNavigation } from 'components/Navigation/AuthNavigation';
// import { Navigation } from 'components/Navigation/Navigation';
import { UserNavigation } from 'components/Navigation/UserNavigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsLogedIn } from 'redux/auth/auth.selectors';

export const LayOut = () => {
  const isLogedIn = useSelector(getIsLogedIn);
  return (
    <>
      <header>{isLogedIn ? <UserNavigation /> : <AuthNavigation />}</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
