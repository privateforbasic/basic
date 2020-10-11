import NextLink from "next/link";
import { NavLink } from "@atoms";
import { StyledFooter } from "./styles";

const footer = {
  menu: [
    { href: "#", title: "Գլխավոր էջ" },
    { href: "#", title: "Դասընթացներ" },
    { href: "#", title: "Մեր մասին" },
    { href: "#", title: "Բլոգ" },
    { href: "#", title: "Համագործակցություն" },
    { href: "#", title: "Աշխատանք" },
    { href: "#", title: "Կոնտակտներ" },
    { href: "#", title: "Օնլայն վճարում" },
  ],
  apps: [
    { href: "#", src: "/images/icons/app-store.svg", title: "App Store" },
    { href: "#", src: "/images/icons/google-play.svg", title: "Google Play" },
    { href: "#", src: "/images/icons/github.svg", title: "GitHub" },
    { href: "#", src: "/images/icons/slack.svg", title: "Slack" },
  ],
  form: {
    title: "Բաժանորդագրություն",
    placeholder: "Էլ. հասցե",
    submit: "Հաստատել",
  },
  followUs: {
    title: "Հետևեք մեզ",
    icons: [
      { href: "#", src: "/images/icons/social/facebook.svg", alt: "Facebook" },
      {
        href: "#",
        src: "/images/icons/social/instagram.svg",
        alt: "Instagram",
      },
      { href: "#", src: "/images/icons/social/linkedin.svg", alt: "Linkedin" },
      { href: "#", src: "/images/icons/social/youtube.svg", alt: "Youtube" },
      { href: "#", src: "/images/icons/social/telegram.svg", alt: "Telegram" },
    ],
  },
  copyRight:
    " © 2020 | Պատրաստված է React-ով և <span>♥</span>-ով մեր ուսանողների կողմից",
};

const Footer = () => {
  return (
    <StyledFooter>
      <section>
        <ul>
          {footer.menu.map(({ href, title }, idx) => (
            <li key={idx}>
              <NavLink href={href} title={title} />
            </li>
          ))}
        </ul>
        <ul>
          {footer.apps.map(({ href, src, title }, idx) => (
            <li key={idx}>
              <NextLink href={href}>
                <a>
                  <img src={src} alt={title} />
                  {title}
                </a>
              </NextLink>
            </li>
          ))}

          <li>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbasic.it.center%2F&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=390222008446213"
              width="340"
              height="154"
              style={{ border: "none", overflow: "hidden" }}
              allow="encrypted-media"
              title="facebook page"
            ></iframe>
          </li>
        </ul>
        <ul>
          <li>
            <form action="#">
              <fieldset>
                <legend>{footer.form.title}</legend>
                <label htmlFor="subscribe" className="srOnly"></label>
                <input type="text" id="subscribe" placeholder={footer.form.placeholder} />
                <input type="submit" value={footer.form.submit} />
              </fieldset>
            </form>
          </li>
          <li>
            <fieldset>
              <legend>{footer.followUs.title}</legend>
              <section id="social">
                {footer.followUs.icons.map(({ href, src, alt }, idx) => (
                  <NextLink href={href} key={idx}>
                    <a>
                      <img src={src} alt={alt} />
                    </a>
                  </NextLink>
                ))}
              </section>
            </fieldset>
          </li>
        </ul>
      </section>
      <p dangerouslySetInnerHTML={{ __html: footer.copyRight }}></p>
    </StyledFooter>
  );
};

export default Footer;
