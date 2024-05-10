'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 24px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    border: none;
    background-color: #fff;
  }

  a {
    text-decoration: none;
  }
`;

export const PageNumbersContainer = styled.div`
  display: flex;
  gap: 8px;
`;
