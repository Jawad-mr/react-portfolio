import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="navbar">
        <div className="logo">My Portfolio</div>

        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>

      <div className="container">
        <Header />
        <About />
        <Hobbies />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
