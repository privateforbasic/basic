import { StyledSection } from "./styles";

// const portfolio = {
//   image: {
//     src: "/images/courses/companies-logos/behance.svg",
//     alt: "Behance Logo",
//     title: "Behance Logo",
//   },
//   texts: [
//     "Need Inspiration? Here you can find it! :)",
//     "Portfolio mady by our students.",
//   ],
//   href: "https://behance.net/",
// };

const Portfolio = ({ data }) => {
  const { image, texts, link } = data;

  return (
    <StyledSection>
      <section className="container">
        <section className="content">
          <img
            className="logo"
            alt={image.alt}
            src={`/images/courses/companies-logos/${image.src}`}
          />
          {texts.map((text: string, idx: number) => (
            <p key={idx}>{text}</p>
          ))}
          <a href={link.href} target="_blank" className="sign-up">
            {link.text}
          </a>
        </section>
      </section>
    </StyledSection>
  );
};

export default Portfolio;
