'use client';

import styled from '@emotion/styled';

export const ContentAreaElement = styled.section``;

export const ProductsResultWrapperElement = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    gap: 24px;
    flex-direction: row;

    ${ContentAreaElement} {
      flex: 1;
    }
  }
`;

export const SidebarElement = styled.div`
  flex-shrink: 0;
  height: fit-content;
  width: 384px;
`;
