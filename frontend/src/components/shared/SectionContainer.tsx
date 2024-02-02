import { ReactNode } from "react";
import { useSpring, animated } from "react-spring";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
  });

  const styles: React.CSSProperties = {
    minHeight: "100vh",
    height: "fit-content",
    minWidth: "100vw",
    width: "fit-content",
    border: "1px solid red"
  };

  return (
    <animated.div style={{ ...props, ...styles }}>{children}</animated.div>
  );
};

export default SectionContainer;
