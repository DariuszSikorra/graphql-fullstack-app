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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
