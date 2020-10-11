import { useSpring, animated } from "react-spring";
import { useAnimateInView } from "hooks";
import ease from "utils/easing";

import { StyledSection } from "./styles";

const Number = ({ title, number, className }) => {
  const [ref, , , inView] = useAnimateInView();
  const props = useSpring({
    number: inView ? number : 0,
    from: { number: 0 },
    config: {
      duration: number === 5 ? 500 : number === 1500 ? 1000 : 1300,
      easing: ease.OutQuint,
    },
  });

  return (
    <span ref={ref}>
      <animated.span className={className}>
        {props.number.interpolate(
          (value: any) =>
            `${value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`
        )}
      </animated.span>
      <span>{title}</span>
    </span>
  );
};

const Experience = ({ data }) => {
  const { experiences } = data;

  return (
    <StyledSection>
      <section>
        {experiences.map((props: any) => (
          <Number {...props} key={props.id} />
        ))}
      </section>
    </StyledSection>
  );
};

export default Experience;
