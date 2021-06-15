import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/_navbar";

import './assets/scss/main.scss';
import './assets/scss/_reset.scss';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/products" component={ Products } />
      </Switch>
    </main>
  );
}

export default App;
