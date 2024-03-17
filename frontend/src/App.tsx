import { Element } from "react-scroll";
// import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";
import ROUTES from "./routes/routes";
import {
  Home,
  Summary,
  Experience,
  Technologies,
  Projects,
  Contact,
} from "./sections";
import styled from "@emotion/styled";
import theme from "@/theme";

const StyledBackground = styled.div`
  position: fixed;
  z-index: -1;  
  width: 100vw;
  height: 100vh;
  background-color: ${theme.palette.background.default};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const AppWrapper = styled.div`
  max-width: ${theme.breakpoints.values.md}px;
  margin: auto;
`

function App() {
  return (
    <AppWrapper>
      <Navigation />

      <Element name={ROUTES.home}>
        <Home />
      </Element>
      <Element name={ROUTES.summary}>
        <Summary />
      </Element>
      <Element name={ROUTES.experience}>
        <Experience />
      </Element>
      <Element name={ROUTES.technologies}>
        <Technologies />
      </Element>
      <Element name={ROUTES.projects}>
        <Projects />
      </Element>
      <Element name={ROUTES.contact}>
        <Contact />
      </Element>
      <StyledBackground />
    </AppWrapper>
  );
}

export default App;
