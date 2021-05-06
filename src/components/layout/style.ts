import styled from 'styled-components';
import { FONTS, COLORS, defaultTheme } from 'src/components/palette';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  ${FONTS.InterStyle};
  background: inherit;
`;
LayoutWrapper.defaultProps = {
  theme: defaultTheme,
};

export const TopPanel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 15px 30px;
  background: ${COLORS.blue[600]};
  color: ${COLORS.white};
`;
TopPanel.defaultProps = {
  theme: defaultTheme,
};

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
`;
PageWrapper.defaultProps = {
  theme: defaultTheme,
};
