import { StyledSection } from "./styles";
import Color from "color";

// const discounts = {
//   title: "Study Hard, Study Free!",
//   articles: [
//     {
//       id: "1",
//       percentage: "50%",
//       description: "* Discount if the score is between 4.4 up to 4.7",
//       dataAosDelay: "550",
//     },
//     {
//       id: "2",
//       percentage: "100%",
//       description: "* Discount if the score is between 4.8 up to 5",
//       dataAosDelay: "450",
//     },
//     {
//       id: "3",
//       percentage: "30%",
//       description: "* Discount if the score is between 4 up to 4.3",
//       dataAosDelay: "650",
//     },
//   ],
// };

const Discounts = ({ data, gradient }) => {
  const { title, articles } = data;

  const hsl = Color(gradient.split(", ")[1])
    .hsl()
    .toString()
    .slice(4, -1)
    .split(", ");

  const hsl1 = Color(gradient.split(", ")[2].slice(0, -1))
    .hsl()
    .toString()
    .slice(4, -1)
    .split(", ");

  const formatColorToHSL = colorArr => {
    return `hsl(${colorArr[0]}, ${colorArr[1]}%, ${colorArr[2]}%)`;
  };

  const colors = [
    formatColorToHSL([
      Number(hsl[0]) + 14,
      Number(hsl[1].slice(0, -1)) + 7,
      Number(hsl[2].slice(0, -1)) + 7,
    ]),
    formatColorToHSL([
      Number(hsl1[0]) + 7,
      Number(hsl1[1].slice(0, -1)) - 8,
      Number(hsl1[2].slice(0, -1)) + 4,
    ]),
    formatColorToHSL([
      Number(hsl[0]) + 21,
      Number(hsl[1].slice(0, -1)) + 9,
      Number(hsl[2].slice(0, -1)) + 9,
    ]),
  ];

  return (
    <StyledSection>
      <h2>{title}</h2>
      <section className="container">
        {articles.map(({ id, percentage, description, dataAosDelay }, idx) => (
          <article data-aos="fade-up" data-aos-delay={dataAosDelay} key={id}>
            <section style={{ background: colors[idx] }}>
              <h3>{percentage}</h3>
            </section>
            <h2>{description}</h2>
          </article>
        ))}
      </section>
    </StyledSection>
  );
};

export default Discounts;
