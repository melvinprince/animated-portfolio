import Home from "./sections/Home";
import "./app.scss";
import About from "./sections/About";
import Service from "./sections/Services";
import Parallax from "./sections/Parallax";
import ProjectOne from "./sections/ProjectOne";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div>
      <Home />
      <Parallax type="about" />
      <About />
      <Parallax type="services" />
      <Service />
      <ProjectOne />
      <Contact />
    </div>
  );
};

export default App;
