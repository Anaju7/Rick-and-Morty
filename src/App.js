import './App.css';
import Card from "./components/cards/index"
import Footer from "./components/footer/footer"
import About from "./components/about/sobre"
import logo from "../src/assets/logotipo.png"
import Particle from './backgroundParticle/particle';

function App() {
  return (
    <div className="App">
        <Particle/>
        <div className="components">
            <img className="logo" src={logo} alt="logo rick and Morty"/>
            <About/>
            <Card/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
