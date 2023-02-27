import { AuthNavigation } from 'components/Navigation/AuthNavigation';
// import { Navigation } from 'components/Navigation/Navigation';
import { UserNavigation } from 'components/Navigation/UserNavigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsLogedIn } from 'redux/auth/auth.selectors';
import { Suspense } from 'react';
import { HomeNavigation } from 'components/Navigation/HomeNavigation';
import { Wraper } from 'components/Navigation/UserNavigation.styled';

export const LayOut = () => {
  const isLogedIn = useSelector(getIsLogedIn);
  return (
    <>
      <header>
        <Wraper>
          <HomeNavigation />
          {isLogedIn ? <UserNavigation /> : <AuthNavigation />}
        </Wraper>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
