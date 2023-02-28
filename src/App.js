
import './App.css';
import NavBar from './components/Navbar1';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './components/Footer';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
