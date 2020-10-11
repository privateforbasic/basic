import { StyledSection } from "./styles";

const Companies = ({ data }) => {
  const { title, companies } = data;

  return (
    <StyledSection>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 220">
        <path
          fill="#0a0b10"
          fillOpacity="1"
          d="M0,128L80,144C160,160,320,192,480,218.7C640,245,800,267,960,272C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <section>
        <h2>{title}</h2>
        <ul className="container">
          {companies.map(({ id, href, image: { src, alt, style } }) => (
            <li key={id}>
              <a href={href} target="_blank">
                <img src={src} alt={alt} />
                <style jsx>{`
                  ${style}
                `}</style>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </StyledSection>
  );
};

export default Companies;
