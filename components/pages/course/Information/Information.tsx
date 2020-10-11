import { StyledSection } from "./styles";

// const information = {
//   texts: [
//     {
//       id: "1",
//       title: "Duration: 3 months",
//     },
//     {
//       id: "2",
//       title: "Price: 45.000 AMD / month",
//     },
//     {
//       id: "3",
//       title: "Admission deadline: 1/5/2020",
//     },
//   ],
// };

const Information = ({ data }) => {
  const { texts } = data;

  return (
    <StyledSection>
      <ul>
        {texts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </StyledSection>
  );
};

export default Information;
