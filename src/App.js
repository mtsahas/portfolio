// import './App.scss';
import {Routes, Route, HashRouter} from 'react-router-dom';
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
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </div>
  );
}

export default App;
