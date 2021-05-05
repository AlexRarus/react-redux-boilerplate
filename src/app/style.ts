import styled from 'styled-components';
import { FONTS } from 'src/components/palette';

export const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  ${FONTS.InterStyle};
  flex-grow: 1;
  background: inherit;
`;
