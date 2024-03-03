
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { football } from './Player.js';
import Playercard from './Component/Playercard.js';


function App() {
  
  return(
    <div>
      <Playercard list ={football} />
    </div>
  )
}

export default App;
