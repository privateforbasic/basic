import React, { ReactElement } from "react";
import Link from "next/link";
import cn from "classnames";

const NextLink = (props: {
  children: any;
  href: string;
  className?: string;
  id?: string;
  linkProps?: any;
}) => {
  const { children, href, className, id, ...linkProps } = props;

  return (
    <Link href={href} {...linkProps}>
      <a className={cn([className])} id={id}>{children}</a>
    </Link>
  );
};

NextLink.defaultProps = {
  className: "",
  href: "/",
};

export default NextLink;
