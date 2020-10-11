import { NextLink } from "@atoms";
import { StyledSection } from "./styles";
import { useRouter } from "next/router";
import cn from "classnames";

const menu = {
    "searchText": "Որոնել",
    "menuList": [
        {"id": "1", "href": "/", "title": "Գլխավոր էջ"},
        {"id": "2", "href": "/courses", "title": "Դասընթացներ"},
        {"id": "3", "href": "#", "title": "Մեր մասին"},
        {"id": "4", "href": "#", "title": "Բլոգ"},
        {"id": "5", "href": "#", "title": "Համագործակցություն"},
        {"id": "6", "href": "#", "title": "Կոնտակտներ"},
    ],
    "searchList": [
        {"id": "1", "href": "#", "title": "Front-End Engineering"},
        {"id": "2", "href": "#", "title": "Back-End Engineering"},
    ]
}


const Menu = () => {
  const route = useRouter();

  return (
    <StyledSection id="menu-wrapper" className="menu">
      <nav>
        <input type="text" placeholder="Որոնել" />
        <section id="search-results">
          <ul>
            {menu.searchList.map(({ id, href, title }) => (
              <li key={id}>
                <NextLink href={href}>{title}</NextLink>
              </li>
            ))}
          </ul>
        </section>
        {menu.menuList.map(({ id, href, title }) => (
          <NextLink href={href} key={id}>
            <span data-hover={title} className={cn({ active: route.pathname === href })}>{title}</span>
          </NextLink>
        ))}
      </nav>
    </StyledSection>
  );
};

export default Menu;
