import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogOutBtn = styled.button`
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
  /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
  padding: 15px;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${p => p.theme.colors.primary};
  text-decoration: none;
  transition: transform 1s ease-in-out;
  &:hover {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.1);
  }
  &.active {
    background-color: ${p => p.theme.colors.backgroundSecondary};
    color: ${p => p.theme.colors.black};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justyfy-content: center;
  align-items: center;
  gap: 15px;
`;

export const Wraper = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const UserContainer = styled.div`
  display: flex;
  justyfy-content: center;
  align-items: center;
  gap: 15px;
`;
