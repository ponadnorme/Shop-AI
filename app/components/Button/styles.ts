'use client';

import styled from '@emotion/styled';
import {ButtonVariants} from '@/app/components/Button/types';
import {css} from '@emotion/react';

const handleVariant = (variant: ButtonVariants) => {
  switch (variant) {
    case ButtonVariants.primary:
      return css`
        background: #190;

        &:hover {
          background: #050;
        }
      `;
    case ButtonVariants.secondary:
      return css`
        background: #08f;

        &:hover {
          background: #07c;
        }
      `;
    }
}

export const ButtonElement = styled.button<{
  variant: ButtonVariants,
}>`
  align-items: center;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  padding: 4px 16px;
  text-align: center;
  transition: background .2s;
  ${props => handleVariant(props.variant)}
`;
