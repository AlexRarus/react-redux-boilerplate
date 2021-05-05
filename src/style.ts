import styled, { createGlobalStyle } from 'styled-components';
import { COLORS, FONTS } from 'src/components/palette';
import { ITheme } from 'src/dal/theme/interfaces';

interface IPropsWithTheme {
  theme: ITheme;
}

export const GlobalStyleApp = createGlobalStyle`  
  html {
    background-color: ${COLORS.grey5};
    width: 100%;
    height: 100%;
    display: table;
  }    
  
  body {
    ${FONTS.InterStyle};
    margin: 0;
    padding: 0;   
    font-size: 14px;
    color: ${COLORS.grey90};   
    width: 100%;
    display: table-cell;
    
    &.disable-scroll {
      overflow: hidden;
    }

    & .modal-component-wrapper {
      display: none;
      
      :last-of-type {
        display: block;
      }
    }
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    ${FONTS.InterBoldStyle};
    margin: 0;
  }
  
  video {
    width: 100%;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    
    @media only screen and (max-width: 768px) { 
        display: block;
    }
  }     
  
  #ModalContainer {
    position: absolute;
    z-index: 100;
  }

  * {
    box-sizing: border-box;
  }
`;

export const ThemedBlock = styled.div<IPropsWithTheme>``;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const PageThemedWrapper = styled(ThemedBlock)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
`;
