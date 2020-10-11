import { StyledSection } from "./styles";

const Faq = ({ data }) => {
  const { title, questions } = data;

  return (
    <StyledSection>
      <section className="container">
        <h2>{title}</h2>
        <section>
          {questions.map(({ id, question, answer }) => (
            <details key={id}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </section>
      </section>
    </StyledSection>
  );
};

export default Faq;
