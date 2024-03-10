'use client';

import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {PriceElementVariantEnum} from "./types";

const PriceElementVariantHandler = (variant?: PriceElementVariantEnum) => {
  if (variant && variant === PriceElementVariantEnum.bold) {
    return css`
      font-weight: bold;
    `;
  }

  return css``;
}

export const PriceElement = styled.div<{
  variant?: PriceElementVariantEnum,
}>`
  ${props => PriceElementVariantHandler(props.variant)}
`;

export const RegularPriceElement = styled.div`
  color: rgba(0,0,0,.5);
  font-size: .8em;
  text-decoration: line-through;
`;

export const LowestPriceInfo = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
`;
