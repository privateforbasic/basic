import { StyledSection } from "./styles";

const Blog = ({ data }) => {
  const { title, blogs, all } = data;

  return (
    <StyledSection>
      <h2>{title}</h2>
      <section className="container">
        {blogs.map(
          ({ title, description, readMore, id, image: { src, alt } }) => (
            <article key={id}>
              <img src={src} alt={alt} />
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={readMore.href}>{readMore.text}</a>
            </article>
          )
        )}
      </section>
      <a href={all.href} target="_blank" className="sign-up">
        {all.text}
      </a>
    </StyledSection>
  );
};

export default Blog;
