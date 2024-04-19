'use client';

import styled from '@emotion/styled';
import {Modal as BaseModal} from '@/app/components/Modal/Modal';
import {ModalContentElement} from '@/app/components/Modal/styles';
import {CenteredContentContainerElement} from '@/app/styles/common';

export const Modal = styled(BaseModal)`
  ${ModalContentElement} {
    height: 100%;
    margin: 0;
    max-width: initial;
    width: 100%;
  }
`;

export const MainImageElement = styled.div`
  display: flex;
  justify-content: center;
`;

export const ThumbnailsElement = styled(CenteredContentContainerElement)`
  display: flex;
  flex-wrap: wrap;
`;
