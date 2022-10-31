import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header>
      <Navbar />
        <Routes>
          <Route exact path = "/" element={<Home />} />
          <Route exact path = "/about" element={<About />} />
          <Route exact path = "/service" element={<Service />} />
          <Route exact path = "/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
