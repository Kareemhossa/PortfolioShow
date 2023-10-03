import { useEffect } from "react";
//Animation
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScrollAnim = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, view]);

  return [element, controls];
};
