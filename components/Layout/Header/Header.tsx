import { useRouter } from "next/router";
import cn from "classnames";

import { NavLink, NextLink } from "@atoms";
import { StyledHeader, Nav, Search, Flags } from "./styles";

function myFunction() {
  let body = document.querySelector("body");
  let header = document.querySelector("header");
  let logo = document.querySelector("#logo");
  let elements = document.querySelectorAll(".menu");
  let input = document.querySelector("#menu-wrapper input");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("active");
  }
  header.classList.toggle("menu-opened");
  body.classList.toggle("menu-opened");
  logo.classList.toggle("aaa");
  input.toggleAttribute("autofocus");
}

const Header = ({ data }) => {
  const route = useRouter();

  const { flags, tabs } = data;

  return (
    <StyledHeader
      main={route.pathname === "/"}
      courses={route.pathname === "/courses"}
    >
      <section className="container">
        <NextLink href="/" className="logo" id="logo">
          <img src="/images/logo.svg" alt="Basic IT Center" />
        </NextLink>
        <section>
          <Nav>
            <ul>
              {tabs.map(({ id, tab, name }) => (
                <li key={id}>
                  <NavLink
                    href={tab}
                    title={name}
                    className={cn({ active: route.pathname === tab })}
                  />
                </li>
              ))}
            </ul>
            <a
              id="menu"
              className="menu"
              aria-label="Menu"
              onClick={myFunction}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </Nav>
          <Search href="#" id="search" onClick={myFunction}>
            <img src="/images/icons/search.svg" alt="" />
          </Search>
          <Flags id="flags">
            {flags.map(({ id, src, alt }) => (
              <li key={id}>
                <a href="#" rel="noopener" aria-label="lang">
                  <img src={src} alt={alt} />
                </a>
              </li>
            ))}
          </Flags>
        </section>
      </section>
    </StyledHeader>
  );
};

export default Header;
