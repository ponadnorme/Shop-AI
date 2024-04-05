'use client';

import styled from '@emotion/styled';

export const CenteredContentContainerElement = styled.div`
  margin: 0 auto;
  max-width: 1232px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  @media (min-width: 1232px) {
    max-width: 1200px;
    padding-left: 0;
    padding-right: 0;
  }
`;
