import { ButtonScrollLink, CourseSvg } from "@atoms";
import { StyledSection } from "./styles";

// const landing = {
//   backgroundImage: {
//     src: "/images/courses/backgrounds/ui-ux.svg",
//     alt: "UI/UX",
//   },
//   article: {
//     image: {
//       src: "/images/courses/logos/ui-ux.svg",
//       alt: "UI/UX",
//     },
//     gradient: "linear-gradient(145deg, #db295c, #f7d01b)",
//     title: "UI/UX Design Courses",
//     description:
//       "Let’s explore the world of web design together! Create the most interesting user interfaces and the best user experiences for websites and applications using your new skills and deep knowledge. This is the best course to bring your incredible ideas to life.",
//     button: {
//       href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
//       title: "SIGN UP",
//     },
//   },
// };

const Landing = ({ data }) => {
  const {
    landing: { name, description, signUp },
    gradient,
    image,
  } = data;

  return (
    <>
      {/* <BackgroundImage
        src="/images/courses/backgrounds/ui-ux.svg"
        alt="UI/UX"
      /> */}
      <CourseSvg
        fistColor={gradient.split(", ")[1]}
        secondColor={gradient.split(", ")[2].slice(0, -1)}
      />
      <StyledSection>
        <article
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="500"
        >
          <img src={`/images/courses/logos/${image.src}`} alt={image.alt} />
          <section>
            <h1>{name}</h1>
          </section>
          <p>{description}</p>
          <a href={signUp.href} target="_blank" className="sign-up">
            {signUp.text}
          </a>
        </article>
        <ButtonScrollLink />
      </StyledSection>
    </>
  );
};

export default Landing;
