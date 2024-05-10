// 'use parent client';

import {ButtonElement} from '@/app/components/Button/styles';
import Link from 'next/link';
import React from 'react';
import {ButtonVariants} from '@/app/components/Button/types';

type ButtonProps = {
  linkTo?: string,
  children: React.ReactNode,
  variant?: ButtonVariants,
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({linkTo, children, variant = ButtonVariants.primary, ...props}: ButtonProps) => {
  const linkProps = linkTo ? {
    as: Link,
    href: linkTo,
  } : {};

  return (
    <>
      <ButtonElement
        {...linkProps}
        variant={variant}
        {...props}
      >
        {children}
      </ButtonElement>
    </>
  );
};
