// useScrollAnimation.ts
import { useInView } from "react-intersection-observer";

const useScrollAnimation = () => {
  // Create a ref and an inView value
  const [ref, inView] = useInView({
    // Set the threshold to 0.5, which means the element is in view when it is 50% visible
    threshold: 0.5,
  });

  // Return the ref and the inView value
  return { ref, inView };
};

export default useScrollAnimation;
