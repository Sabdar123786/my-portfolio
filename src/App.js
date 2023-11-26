import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Education from "./Components/Education/Education";
import Achievement from "./Components/Achievement/Achievement";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/education" element={<Education />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
        <div>
          <Footer/>
        </div>
     
     
      
        </div>
     
    
  );
}

export default App;
