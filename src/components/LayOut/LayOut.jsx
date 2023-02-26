import { AuthNavigation } from 'components/Navigation/AuthNavigation';
// import { Navigation } from 'components/Navigation/Navigation';
import { UserNavigation } from 'components/Navigation/UserNavigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsLogedIn } from 'redux/auth/auth.selectors';
import { Suspense } from 'react';
import { HomeNavigation } from 'components/Navigation/HomeNavigation';

export const LayOut = () => {
  const isLogedIn = useSelector(getIsLogedIn);
  return (
    <>
      <header>
        <HomeNavigation />
        {isLogedIn ? <UserNavigation /> : <AuthNavigation />}
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
