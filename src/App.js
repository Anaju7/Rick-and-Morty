import './App.css';
import Particle from "./backgroundParticle/particle"
import Card from "./cards/index"

function App() {
  return (
    <div className="App">
     <Particle/>
     <div className="components">
       <Card/>
     </div>
    </div>
  );
}

export default App;
