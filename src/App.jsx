import Home from "./sections/Home";
import "./app.scss";
import About from "./sections/About";
import Service from "./sections/Services";
import ProjectOne from "./sections/ProjectOne";
import Contact from "./sections/Contact";
import Parallax from "./components/Parallax";

const App = () => {
  return (
    <div>
      <Home />
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
