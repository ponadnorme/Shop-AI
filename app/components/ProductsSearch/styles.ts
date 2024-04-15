'use client';

import styled from '@emotion/styled';
import {InputElement} from '@/app/components/Input/styles';

export const ProductsSearchElement = styled.div`
  position: relative;
  height: 44px;
  z-index: 1;

  ${InputElement} {
    width: 100%;
  }

  ${InputElement} {
    height: 40px;
    outline: none;
    padding-left: 32px;
    position: relative;
    z-index: 1;
  }

  > svg {
    height: 16px;
    left: 14px;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }
`;

export const SearchedProductsElement = styled.div`
  background-color: #fff;
  border: 1px solid #f2f2f2;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  left: 0;
  padding: 28px 0 8px 0;
  position: absolute;
  max-height: 400px;
  overflow-Y: auto;
  top: 22px;
  width: 100%;
  z-index: -1;
`;

export const NoResultsElement = styled.p`
  color: rgba(0, 0, 0, 0.4);
`;
