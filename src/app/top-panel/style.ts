import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from 'src/components/palette';

export const TopPanelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 15px 30px;
  background: ${COLORS.blue60};
  color: ${COLORS.white};
`;

export const TopPanelLink = styled(NavLink)`
  color: ${COLORS.white};
  text-decoration: none;
  margin-right: 20px;

  &:visited,
  &:active {
    color: ${COLORS.white};
  }

  &:last-child {
    margin-right: 0;
  }
`;
