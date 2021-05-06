import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from 'src/components/palette';

export const TopMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TopMenuItemWrapper = styled.div`
  margin-right: 20px;
  cursor: pointer;
  text-decoration: none;
  color: ${COLORS.white};

  * {
    cursor: pointer;
    text-decoration: none;
    color: ${COLORS.white};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const TopMenuLink = styled(NavLink)`
  color: inherit;

  &:visited,
  &:active {
    color: inherit;
  }
`;

export const TopMenuButton = styled.div`
  color: inherit;
`;
