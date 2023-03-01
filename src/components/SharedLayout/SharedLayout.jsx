import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink, SyyledList } from './SharedLayout.styled';
import { Suspense } from 'react';
export const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <SyyledList>
            <li>
              <StyledLink to="/">
                <b>Home</b>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">
                <b>Movies</b>
              </StyledLink>
            </li>
          </SyyledList>
        </nav>
      </StyledHeader>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
