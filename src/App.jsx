import styles from './App.module.css';
import { Navbar } from "./componets/Navbar/Navbar.jsx";
import { Hero } from "./componets/Hero/Hero.jsx";
import { About } from "./componets/About/About.jsx";
import { Experience } from "./componets/Experience/Experience.jsx";
import { Project } from "./componets/projects/Project.jsx"
import { Contant } from './componets/contant/Contant.jsx';
function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contant />
    </div>
  )
}

export default App
