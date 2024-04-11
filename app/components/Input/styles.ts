import styled from '@emotion/styled';
import {css} from '@emotion/react';

export const InputWrapperElement = styled.div`
  position: relative;

  label {
    position: absolute;
    top: 8px;
    left: 10px;
    color: #333;
    pointer-events: none;
    transition: top 0.2s, font-size 0.2s, padding 0.2s, background-color 0.2s;
  }
`;

export const InputElement = styled.input<{
  activeState: boolean,
  hasValue: boolean,
}>`
  background-color: #f2f2f2;
  border: none;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  padding: 8px;
  width: 100%;

  ${props => (props.activeState || props.hasValue) && css`
    + label {
      top: 0;
      transform: translateY(-50%);
      font-size: 12px;
      padding: 2px 4px;
      background-color: #fff;
      border-radius: 4px;
    }
  `}
`;
