import {ProductElement} from '@/app/components/Product/styles';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

export const ProductsContainerElement = styled.div<{
  $wrap: boolean,
}>`
  display: flex;
  gap: 8px;

  ${props => {
    return props.$wrap
            ? css`
              flex-wrap: wrap;
            `
            : css``;
  }};

  container-type: inline-size;

  ${ProductElement} {
    @container (min-width: 472px) {
      flex-basis: calc(50% - 4px);
    }
  
    @container (min-width: 712px) {
      flex-basis: calc(33.333% - 6px);
    }
  
    @container (min-width: 952px) {
      flex-basis: calc(25% - 6px);
    }
  }
`;
