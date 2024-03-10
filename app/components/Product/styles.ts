'use client';

import styled from "@emotion/styled";

export const ProductElement = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 32px 16px 16px;
  position: relative;
  transition: box-shadow .2s;
  
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 0 2px 1px rgba(0, 0, 0, 0.1);
  }
`

export const ImageWrapperElement = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  a {
    display: block;
    height: 100%;
  }
`

export const BottomWrapperElement = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  margin-top: 12px;
  min-height: 100px;
  
  h2 {
    display: -webkit-box;
    font-weight: normal;
    font-size: 16px;
    line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`

export const PurchaseWrapperElement = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  span {
    font-size: 20px;
    font-weight: bold;
  }

  svg {
    color: #fff;
    font-size: 24px;
    transition: color 0.2s;

    @media(min-width: 650px){
      font-size: 26px;
    }
  }
`

export const CartElement = styled.div`
  background: #190;
  border-radius: 4px;
  height: 50px;
  position: relative;
  transition: background .2s;
  width: 50px;

  svg {
    color: #fff;
    font-size: 22px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &:hover {
    background: #050;
    cursor: pointer;
  }
`

export const TagElement = styled.span`
  border: 1px solid #333;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 13px;
  font-weight: 500;
  position: absolute;
  top: 8px;
`
