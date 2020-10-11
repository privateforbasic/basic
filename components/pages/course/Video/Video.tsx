import { StyledSection } from "./styles";

// const video = {
//   title: "Still have questions? Let's watch this!",
//   href: "https://www.youtube.com/embed/28H9RTlmUZM",
// };

const Video = ({ data }) => {
  const { title, href } = data;

  return (
    <StyledSection>
      <h2>{title}</h2>
      <section>
        <iframe
          src={href}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </StyledSection>
  );
};

export default Video;
