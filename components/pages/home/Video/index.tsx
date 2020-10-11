import { StyledSection } from "./styles";

const Video = ({ data }) => {
  const { video, articles } = data;

  return (
    <StyledSection>
      <section className="container">
        <ul>
          {articles.map(({ title, description, id }, idx) => (
            <li data-aos="zoom-in" data-aos-delay={300 + idx * 100} key={id}>
              <article>
                <h4>{title}</h4>
                <p>{description}</p>
              </article>
            </li>
          ))}
        </ul>
        <video src={/*video.src*/ ""} controls poster={video.poster}></video>
      </section>
    </StyledSection>
  );
};

export default Video;
