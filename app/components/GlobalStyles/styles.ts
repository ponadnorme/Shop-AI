import {css} from '@emotion/react';

export const globalStyles = css`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html, body {
    min-width: 360px;
  }

  body {
    background: #f6f6f6;
    color: #222;
  }
`;
