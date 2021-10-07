import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import State from "./state/state"

function App() {
  return (
    <BrowserRouter>
      <header style={{background:"#9c0000"}}>
        <img src="https://live.staticflickr.com/8665/16446526108_302cd3c480_b.jpg" width="100" height="100"/>
        <h1 style={{color:"white"}}>TOKO ELEKTRONIK CERIA</h1>
      </header>
      <Switch>
        <Route path="/" exact component = {State} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
