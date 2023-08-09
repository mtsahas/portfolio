// import './App.scss';
import {Routes, Route} from 'react-router-dom';
// import Layout from './components/Layout'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import "./styles.css";

function App() {
  return (
    // <>
    // <Routes>
    //   <Route path="/" element={<Layout />}/>
    // </Routes>
    // </>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/about" element={<About />} /> */}
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
        
    </div>
  );
}

export default App;
