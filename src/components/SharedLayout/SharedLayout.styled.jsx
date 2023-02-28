import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }
`;
export const SyyledList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
`;

export const StyledHeader = styled.header`
  padding: 10px 0px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;
