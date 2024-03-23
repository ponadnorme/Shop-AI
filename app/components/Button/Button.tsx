import {ButtonElement} from "@/app/components/Button/styles";
import Link from "next/link";

export const Button = ({linkTo, children}: {
  linkTo?: string,
}) => {
  const linkProps = linkTo ? {
    as: Link,
    href: linkTo,
  } : {};

  return (
    <>
      <ButtonElement
        {...linkProps}
      >
        {children}
      </ButtonElement>
    </>
  );
};
