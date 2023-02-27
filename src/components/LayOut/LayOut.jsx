import { AuthNavigation } from 'components/Navigation/AuthNavigation';
// import { Navigation } from 'components/Navigation/Navigation';
import { UserNavigation } from 'components/Navigation/UserNavigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsLogedIn } from 'redux/auth/auth.selectors';
import { Suspense } from 'react';
import { HomeNavigation } from 'components/Navigation/HomeNavigation';
import { Wraper } from 'components/Navigation/UserNavigation.styled';
import { Header } from './LayOut.styled';

export const LayOut = () => {
  const isLogedIn = useSelector(getIsLogedIn);
  return (
    <>
      <Header>
        <Wraper>
          <HomeNavigation />
          {isLogedIn ? <UserNavigation /> : <AuthNavigation />}
        </Wraper>
      </Header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
