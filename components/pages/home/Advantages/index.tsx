import { StyledSection } from "./styles";

const Advantages = ({ data }) => {
  const { advantages } = data;

  return (
    <StyledSection>
      <section className="container">
        {advantages.map(
          ({ id, image: { src, alt }, title, description }, idx) => (
            <article
              data-aos="fade-up"
              data-aos-delay={idx * 100 + 50}
              key={id}
            >
              <img src={src} alt={alt} />
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          )
        )}
      </section>
    </StyledSection>
  );
};

export default Advantages;
