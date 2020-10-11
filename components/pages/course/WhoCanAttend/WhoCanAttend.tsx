import { StyledSection } from "./styles";

// const whoCanAttend = {
//   title: "Is this course right for you? Sure if",
//   texts: [
//     {
//       id: "1",
//       title: "You are ready to study hard!",
//     },
//     {
//       id: "2",
//       title: "You are motivated!",
//     },
//     {
//       id: "3",
//       title: "You have some basic knowledge about web design!",
//     },
//   ],
// };

const WhoCanAttend = ({ data }) => {
  const { title, texts } = data;

  return (
    <StyledSection>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 150 1440 150">
        <path
          fill-opacity="1"
          d="M0,256L80,266.7C160,277,320,299,480,293.3C640,288,800,256,960,229.3C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <section>
        <h2>{title}</h2>
        <ul>
          {texts.map(({ id, title }, idx: number) => (
            <li
              data-aos="zoom-in"
              data-aos-delay={`${200 + 100 * idx}`}
              key={id}
            >
              {title}
            </li>
          ))}
        </ul>
      </section>
    </StyledSection>
  );
};

export default WhoCanAttend;
