'use client';

import styled from "@emotion/styled";

export const ButtonElement = styled.button`
  align-items: center;
  background: #190;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  padding: 4px 16px;
  text-align: center;
  transition: background .2s;

  &:hover {
    background: #050;
  }
`;
