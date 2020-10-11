import { useInView } from "react-intersection-observer";
import { useSpring } from "react-spring";
import eases from "utils/easing";

export const useAnimateInView = (
  {
    delta = -10,
    margin = null,
  }: {
    delta: number;
    margin: string | number;
  } = { delta: -10, margin: null }
) => {
  const rootMargin =
    typeof margin === "string"
      ? margin
      : typeof margin === "number"
      ? `-${globalThis.innerHeight / margin}px 0px`
      : `-${globalThis.innerHeight / 3}px 0px`;

  const [ref, inView]: [any, boolean, any] = useInView({
    rootMargin,
    triggerOnce: true,
  });

  const { opacity, del } = useSpring({
    opacity: inView ? 1 : 0,
    del: inView ? 0 : delta,
    from: { opacity: 0, del: delta },
    config: {
      duration: 1500,
      easing: eases.OutQuart,
    },
  });

  return [ref, opacity, del, inView];
};
