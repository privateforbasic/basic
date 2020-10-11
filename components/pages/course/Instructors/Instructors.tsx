import Link from "next/link";
import { StyledSection } from "./styles";

// const instructors = {
//   title: "Instructors from Top Companies",
//   peoples: [
//     {
//       id: "1",
//       image: {
//         src: "/images/courses/instructors/kristina.webp",
//         alt: "Kristina Hovsepyan",
//         title: "Kristina Hovsepyan",
//       },
//       href: "#",
//       title: "Kristina Hovsepyan",
//       description: "UI/UX designer at PicsArt",
//     },
//     {
//       id: "2",
//       image: {
//         src: "/images/courses/instructors/lilit.webp",
//         alt: "Lilit Grigoryan",
//         title: "Lilit Grigoryan",
//       },
//       href: "#",
//       title: "Lilit Grigoryan",
//       description: "UI/UX designer at Digitain",
//     },
//     {
//       id: "3",
//       image: {
//         src: "/images/courses/instructors/zaruhi.webp",
//         alt: "Zaruhi Kerobian",
//         title: "Zaruhi Kerobian",
//       },
//       href: "#",
//       title: "Zaruhi Kerobian",
//       description: "UI/UX designer at 10Web.io",
//     },
//   ],
// };

const Instructors = ({ data }) => {
  const { title, peoples } = data;

  return (
    <StyledSection>
      <h2>{title}</h2>
      <section className="container">
        {peoples.map(({ id, image, href, title, description }) => (
          <Link href={href} key={id}>
            <a>
              <img
                src={`/images/courses/instructors/${image.src}`}
                alt={image.alt}
                title={title}
              />
              <h4>{title}</h4>
              <span>{description}</span>
            </a>
          </Link>
        ))}
      </section>
    </StyledSection>
  );
};

export default Instructors;
