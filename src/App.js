import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import State from "./state/state"

function App() {
  return (
    <BrowserRouter>
      <header style={{background:"white"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png" width="50" height="50"/>
      </header>
      <Switch>
        <Route path="/" exact component = {State} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
