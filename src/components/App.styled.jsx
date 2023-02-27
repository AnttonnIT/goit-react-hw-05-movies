import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  & svg {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
