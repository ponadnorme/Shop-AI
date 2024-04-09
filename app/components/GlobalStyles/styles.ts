import {css} from '@emotion/react';

export const globalStyles = css`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    min-width: 360px;
    padding: 0;
  }

  body {
    background: #f6f6f6;
    color: #222;
  }
  
  figure {
    margin: 0;
    padding: 0;
  }
`;
