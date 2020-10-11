import { Fragment } from "react";
import { StyledSection } from "./styles";
import Typed from "react-typed";

const Benefits = ({ data }) => {
  const { articles } = data;

  return (
    <StyledSection>
      <section className="container">
        <h1>
          <Typed
            strings={["Պահանջված", "Հետաքրքիր", "Կարևոր"]}
            typeSpeed={100}
            startDelay={1000}
            backSpeed={25}
            smartBackspace={false}
            shuffle={false}
            backDelay={1500}
            fadeOut={false}
            fadeOutClass={"typed-fade-out"}
            fadeOutDelay={500}
            loop={true}
            loopCount={Infinity}
            showCursor={true}
            cursorChar={"|"}
            autoInsertCss={true}
            attr={null}
            bindInputFocusEvents={false}
            contentType={"html"}
          />
          {data.title}
        </h1>
        <section>
          {articles.map(({ id, title, description, image }, idx: number) => (
            <Fragment key={id}>
              <article>
                <img {...image} />
                <h2>{title}</h2>
                <p>{description}</p>
              </article>
              {idx === 0 && <h2>+</h2>}
              {idx === 1 && <h2>=</h2>}
            </Fragment>
          ))}
        </section>
      </section>
    </StyledSection>
  );
};

export default Benefits;
