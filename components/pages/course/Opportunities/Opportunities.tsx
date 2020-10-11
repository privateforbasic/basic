import { StyledSection } from "./styles";

// const opportunities = {
//   title: "By the end of the course you'll be able to",
//   articles: [
//     {
//       id: "1",
//       title: "Design the layout of websites and applications",
//       image: {
//         src: "/images/courses/benefits/5.svg",
//         alt: "Websites and Applications",
//         title: "Websites and Applications",
//       },
//       style: "",
//     },
//     {
//       id: "2",
//       title: "Skillfully work with Adobe XD",
//       image: {
//         src: "/images/courses/benefits/6.svg",
//         alt: "Adobe XD",
//         title: "Adobe XD",
//       },
//       style: "filter: drop-shadow(0px 0px 25px #582b4999)",
//     },
//     {
//       id: "3",
//       title: "Apply your knowledge in a real project",
//       image: {
//         src: "/images/courses/benefits/7.svg",
//         alt: "Real Rroject",
//         title: "Real Rroject",
//       },
//       style: "",
//     },
//     {
//       id: "4",
//       title: "Work in leading IT companies as a UI/UX designer",
//       image: {
//         src: "/images/courses/benefits/8.svg",
//         alt: "Designer",
//         title: "Designer",
//       },
//       style: "",
//     },
//   ],
// };

const Opportunities = ({ data }) => {
  const { title, articles } = data;

  return (
    <StyledSection className="container">
      <h2>{title}</h2>
      <section>
        {articles.map(({ id, title, image, style }, idx) => (
          <article
            data-aos="fade-up"
            data-aos-delay={`${550 + 100 * idx}`}
            key={idx}
          >
            <img
              src={`/images/courses/benefits/${image.src}`}
              alt={image.alt}
              title={title}
            />
            <style jsx>{`
              ${style}
            `}</style>
            <h3>{title}</h3>
          </article>
        ))}
      </section>
    </StyledSection>
  );
};

export default Opportunities;
