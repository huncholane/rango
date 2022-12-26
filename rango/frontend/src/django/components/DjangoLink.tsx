import React from "react";
import djangoLink from "../djangoLink";

type Props = {
  children?: React.ReactNode;
  className?: string;
  target: string;
};

const DjangoLink = ({ target, children, className }: Props) => {
  return (
    <a href={djangoLink(target)} className={className}>
      {children}
    </a>
  );
};

export default DjangoLink;
