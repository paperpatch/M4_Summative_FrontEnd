import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import './index.css';

const Home = () => {
  
    return (
      <>
      <div>
        <br /><br /><br /><br /><br />
        <h1 className="text-center">Welcome to DPC's M4-Summative-Project</h1>
        <h2 className="text-center">Check out our inventories:</h2>
        <div className="text-center">
                    <ul >
                      <li><Link to="/game">Game</Link></li>
                      <li><Link to="/console">Console</Link></li>
                      <li><Link to="/tshirt">Tshirt</Link></li>
                   
                    </ul>
           
                
                </div>
      </div>
      </>
    );
  };
  
  export default Home;