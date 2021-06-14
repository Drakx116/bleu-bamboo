import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/products" component={ Products } />
      </Switch>
    </main>
  );
}

export default App;
