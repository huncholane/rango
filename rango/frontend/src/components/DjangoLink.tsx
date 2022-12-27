import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  to: string;
};

const DjangoLink = ({ to: target, children, className }: Props) => {
  return (
    <a href={`http://localhost:8000/${target}/`} className={className}>
      {children}
    </a>
  );
};

export default DjangoLink;
