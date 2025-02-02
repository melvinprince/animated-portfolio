import Home from "./sections/Home";
import "./app.scss";
import About from "./sections/About";
import ProjectOne from "./sections/ProjectOne";
import Contact from "./sections/Contact";
import Parallax from "./components/Parallax";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <div>
      <Home />
      <TechStack />
      {/* <Parallax type="services" />
      <Service />
      <Parallax type="about" />
      <ProjectOne />
      <About /> */}
      <Contact />
    </div>
  );
};

export default App;
