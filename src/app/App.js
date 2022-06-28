import "./styles.css";
import { Nav } from "../components/nav/nav";
import { Home } from "../components/home/home";
import { AboutMe } from "../components/aboutMe/aboutMe";
import { Projects } from "../components/projects/projects";
import { Contact } from "../components/contact/contact";
import { Footer } from "../components/footer/footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}
