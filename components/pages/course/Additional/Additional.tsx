import { Fragment } from "react";
import { StyledSection } from "./styles";

const additional = {
  title: "Information",
  texts: [
    "The course is held 3 days a week, 2 hours a day.",
    "Practical tasks are periodically implemented during the training.",
    "Graduates are awarded a certificate after completing all stages of the course.",
    "The first lesson is experimental.",
    "Corporate packages for organizations.",
    "* Students progress is assessed using a specially designed grading system.",
    "Still have questions?&nbsp;<a href='#'>Contact us!</a>",
  ],
};

const Additional = ({ data }) => {
  const { title, texts } = additional;

  return (
    <StyledSection>
      <h2>{title}</h2>
      <section>
        <ul>
          {texts.map((text, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </ul>
      </section>
    </StyledSection>
  );
};

export default Additional;
