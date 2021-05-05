import { css, CSSObject } from 'styled-components';

interface IMedia {
  mobile: string;
  tablet: string;
  desktop1024: string;
  desktop: string;
  desktopXl: string;
  middleMin: string;
  middleMax: string;
  wideMin: string;
  wideMax: string;
  veryWideMin: string;
  veryWideMax: string;
}

const MEDIA_STYLE: IMedia = {
  mobile: 'max-width: 529px',
  tablet: 'max-width: 949px',
  desktop1024: 'max-width: 1024px',
  desktop: 'max-width: 1250px',
  desktopXl: 'min-width: 1250px',
  middleMin: 'min-width: 1440px',
  middleMax: 'max-width: 1440px',
  wideMin: 'min-width: 1600px',
  wideMax: 'max-width: 1600px',
  veryWideMin: 'min-width: 1920px',
  veryWideMax: 'max-width: 1920px',
};

export const MEDIA = {
  tablet: (p: CSSObject, ...args: TemplateStringsArray[]) => css`
    @media (${MEDIA_STYLE.tablet}) {
      ${css(p, ...args)}
    }
  `,
  desktop1024: (p: CSSObject, ...args: TemplateStringsArray[]) => css`
    @media (${MEDIA_STYLE.desktop1024}) {
      ${css(p, ...args)}
    }
  `,
  desktop: (p: CSSObject, ...args: TemplateStringsArray[]) => css`
    @media (${MEDIA_STYLE.desktop}) {
      ${css(p, ...args)}
    }
  `,
  desktopXl: (p: CSSObject, ...args: TemplateStringsArray[]) => css`
    @media (${MEDIA_STYLE.desktopXl}) {
      ${css(p, ...args)}
    }
  `,
  middleMin: (p: CSSObject, ...args: TemplateStringsArray[]) => css`
    @media (${MEDIA_STYLE.middleMin}) {
      ${css(p, ...args)}
    }
  `,
  middleMax: (p: CSSObject, ...args: TemplateStringsArray[]) => css`
    @media (${MEDIA_STYLE.middleMax}) {
      ${css(p, ...args)}
    }
  `,
  wideMin: (p: CSSObject, ...args: TemplateStringsArray[]) => css`
    @media (${MEDIA_STYLE.wideMin}) {
      ${css(p, ...args)}
    }
  `,
  wideMax: (p: CSSObject, ...args: TemplateStringsArray[]) => css`
    @media (${MEDIA_STYLE.wideMax}) {
      ${css(p, ...args)}
    }
  `,
  veryWideMin: (p: CSSObject, ...args: TemplateStringsArray[]) => css`
    @media (${MEDIA_STYLE.veryWideMin}) {
      ${css(p, ...args)}
    }
  `,
  veryWideMax: (p: CSSObject, ...args: TemplateStringsArray[]) => css`
    @media (${MEDIA_STYLE.veryWideMax}) {
      ${css(p, ...args)}
    }
  `,
};
