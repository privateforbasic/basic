import { StyledSection } from "./styles";

// const benefits = [
//   {
//     id: "1",
//     image: {
//       src: "/images/courses/benefits/1.svg",
//       alt: "Best teaching method",
//       title: "Best teaching method",
//     },
//     title: "Best teaching method",
//     description: "Reviewed by more than 100 graduates",
//   },
//   {
//     id: "2",
//     image: {
//       src: "/images/courses/benefits/2.svg",
//       alt: "Verified course",
//       title: "Verified course",
//     },
//     title: "Verified course",
//     description: "Accapted methodology by top Armenian IT companies",
//   },
//   {
//     id: "3",
//     image: {
//       src: "/images/courses/benefits/3.svg",
//       alt: "Portfolio included",
//       title: "Portfolio included",
//     },
//     title: "Portfolio included",
//     description: "Multiple real projects by the end of the course",
//   },
//   {
//     id: "4",
//     image: {
//       src: "/images/courses/benefits/4.svg",
//       alt: "Certificate based",
//       title: "Certificate based",
//     },
//     title: "Certificate based",
//     description: "Certificates given to the best graduates",
//   },
// ];

const Benefits = ({ data }) => {
  return (
    <StyledSection>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path d="M0,32L60,48C120,64,240,96,360,96C480,96,600,64,720,69.3C840,75,960,117,1080,133.3C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <section>
        <section className="container">
          {data.map(({ id, image: { alt, src }, title, description }, idx) => (
            <article
              data-aos="fade-up"
              data-aos-delay={idx * 100 + 50 + ""}
              key={id}
            >
              <img
                src={`/images/courses/benefits/${src}`}
                alt={alt}
                title={title}
              />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </section>
      </section>
    </StyledSection>
  );
};

export default Benefits;
