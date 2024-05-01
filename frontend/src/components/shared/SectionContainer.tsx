import theme from "@/theme";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useSpring, animated } from "react-spring";

const StyledMainBox = styled(Box)`
  background: #212121;
  position: relative;
`;


const StyledContainerBox = styled(Box)`
  min-height: 100vh;
`;

const SectionWrapper = ({ children }: { children: ReactNode }) => {
  const bgPoints = {
    startingPoint:
      "linear-gradient(-35deg, #212121 10%, rgb(73, 73, 73) 10% 20%, rgb(112, 112, 112) 20% 30%, rgb(140, 140, 140) 30% 40%, #212121 40%)",
    endingPoint:
      "linear-gradient(-35deg, #212121 8%, rgb(73, 73, 73) 8% 22%, rgb(112, 112, 112) 22% 28%, rgb(140, 140, 140) 28% 41%, #212121 40.5%)",
  };
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
  });

  const styles: React.CSSProperties = {
    minHeight: "100vh",
    height: "fit-content",
    padding: `${theme.spacing(2)}`,
  };

  const bgAnimation = useSpring({
    from: {
      background: bgPoints.startingPoint,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    to: async (next) => {
      // eslint-disable-next-line no-constant-condition
      while (1) {
        await next({
          background: bgPoints.endingPoint,
        });
        await next({
          background: bgPoints.startingPoint,
        });
      }
    },
    config: { mass: 5, tension: 100, friction: 10 },
  });

  return (
    <StyledMainBox>
      <animated.div style={{ ...props, ...styles }}>
        <animated.div style={bgAnimation}>
          <StyledContainerBox maxWidth="md">{children}</StyledContainerBox>
        </animated.div>
      </animated.div>
    </StyledMainBox>
  );
};

export default SectionWrapper;
