import './App.css';
import Particle from "./backgroundParticle/particle"
import Card from "./cards/index"
import logo from "../src/assets/logotipo.png"

function App() {
  return (
    <div className="App">
     <Particle/>
     <div className="components">
       <img className="logo" src={logo} alt="logo rick and Morty"/>
       <Card/>
     </div>
    </div>
  );
}

export default App;
