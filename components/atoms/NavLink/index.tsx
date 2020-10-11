import React from "react";
import NextLink from "next/link";
import cn from "classnames";

const NavLink = (props: {
  title: string;
  href: string;
  className?: string;
}) => {
  const { title, href, className, ...linkProps } = props;

  return (
    <NextLink href={href} {...linkProps}>
      <a className={cn([className])}>
        <span data-hover={title}>{title}</span>
      </a>
    </NextLink>
  );
};

NavLink.defaultProps = {
  className: "",
  href: "/",
};

export default NavLink;
