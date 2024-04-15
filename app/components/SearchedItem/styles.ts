'use client';

import styled from '@emotion/styled';

export const SearchedItemElement = styled.div`
  border-radius: 6px;
  margin: 4px 0;
  padding: 4px;

  a {
    align-items: center;
    color: inherit;
    display: flex;
    font-weight: 300;
    justify-content: space-between;
    text-decoration: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1)
  }
`;

export const ProductInformationElement = styled.div`
  display: flex;
  gap: 8px;
  max-width: 70%;
`;

export const ProductInformationColumnElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > h3 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
  }
`;

export const ProductPriceElement = styled.div`
  font-size: 14px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
