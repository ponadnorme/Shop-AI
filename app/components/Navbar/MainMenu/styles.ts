'use client';

import styled from '@emotion/styled';

export const MenuElement = styled.nav`

`;

export const MenuListElement = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const SubmenuElement = styled.div`
  background: #fff;
  display: flex;
  gap: 16px;
  opacity: 0;
  padding: 8px;
  position: absolute;
  visibility: hidden;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const RootLevelElement = styled.li`
  position: relative;

  &:hover {

    ${SubmenuElement} {
      opacity: 1;
      visibility: visible;
    }

  }
`;


