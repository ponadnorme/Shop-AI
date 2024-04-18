'use client';

import styled from '@emotion/styled';
import {Modal as BaseModal} from '@/app/components/Modal/Modal';
import {ModalContentElement} from '@/app/components/Modal/styles';

export const Modal = styled(BaseModal)`
  ${ModalContentElement} {
    height: 100%;
    margin: 0;
    max-width: initial;
    width: 100%;
  }
`;
