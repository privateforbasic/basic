import { Fragment } from "react";
import { StyledSection } from "./styles";

const syllabus = {
  title: "What you'll learn?",
  sections: [
    {
      id: "1",
      title: "Section 1",
      list: [
        { id: "1", title: "General Information about Design" },
        { id: "2", title: "What is Web Design" },
        { id: "3", title: "What is UI/UX Design" },
        { id: "4", title: "Steps to create Product Design" },
        { id: "5", title: "Adobe XD Introduction" },
        { id: "6", title: "What User Flows are" },
        { id: "7", title: "What is user Journey Map" },
        { id: "8", title: "Using Whimsical" },
        { id: "9", title: "Making User Map" },
        { id: "10", title: "What is Wireframing" },
        { id: "11", title: "Grid Systems" },
        { id: "12", title: "Grid Systems" },
        { id: "13", title: "Website Structure" },
        { id: "14", title: "Responsive Design" },
        { id: "15", title: "Responsive Design" },
        { id: "16", title: "Adaptive Design" },
        { id: "17", title: "Creating Wireframes" },
        { id: "18", title: "Working on projects" },
        { id: "19", title: "Understanding UI Design Style" },
        { id: "20", title: "Sizes and spacings on Web" },
        { id: "21", title: "General Information about Elements in Web sites" },
        { id: "22", title: "Adobe Illustrator short introduction" },
        { id: "23", title: "Adobe Photoshop short introduction" },
        { id: "24", title: "What is Typography" },
        { id: "25", title: "Typography standards on the web" },
        { id: "26", title: "What is UI KIT" },
        { id: "27", title: "Creating students projects UI KIT" },
        { id: "28", title: "What is Material Design" },
        { id: "29", title: "What is Human Interface Guidelines" },
        { id: "30", title: "What is Fluent Design" },
        { id: "31", title: "Creating UI/UX Designer CV" },
        { id: "32", title: "Creating UI/UX Designer Portfolio" },
        { id: "33", title: "Theoretical and Practical Testing" },
      ],
    },
    {
      id: "2",
      title: "Section 2",
      list: [
        { id: "1", title: "General Information about Design" },
        { id: "2", title: "What is Web Design" },
        { id: "3", title: "What is UI/UX Design" },
        { id: "4", title: "Steps to create Product Design" },
        { id: "5", title: "Adobe XD Introduction" },
        { id: "6", title: "What User Flows are" },
        { id: "7", title: "What is user Journey Map" },
        { id: "8", title: "Using Whimsical" },
      ],
    },
  ],
  link: {
    href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
    title: "SIGN UP NOW",
  },
};

const Syllabus = ({ data }) => {
  const { title, sections, link } = data;

  return (
    <StyledSection>
      <h2>{title}</h2>
      <section>
        <input type="checkbox" id="checkbox1" />
        {sections.map(({ id, title, list }) => (
          <Fragment key={id}>
            <h4>{title}</h4>
            <ul>
              {list.map(({ id, title }) => (
                <li key={id}>
                  <p>{title}</p>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}

        <label htmlFor="checkbox1">
          <img src="/images/icons/arrow-down.svg" alt="Arrow" />
        </label>
      </section>
      <a href={link.href} target="_blank" className="sign-up">
        {link.text}
      </a>
    </StyledSection>
  );
};

export default Syllabus;
