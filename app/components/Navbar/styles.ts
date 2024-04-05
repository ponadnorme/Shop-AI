'use client';

import styled from '@emotion/styled';

export const NavbarElement = styled.nav`
  background-color: #fff;
  position: fixed;
  top: 0;
  transition: top 0.2s;
  width: 100%;
  z-index: 100;
`;

export const LogoElement = styled.div`
  height: 50px;
  
  img {
    display: block;
    height: 100%;
    width: auto;
  }
`;

export const NavbarSpaceFillElement = styled.div`
  height: 80px;
`;
