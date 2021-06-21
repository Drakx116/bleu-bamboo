import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Navigation/_footer";
import Navbar from "./components/Navigation/_navbar";

import './assets/scss/main.scss';
import './assets/scss/global/_reset.scss';
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <main>
      <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/products" component={ Products } />
            <Route path="/products/:slug" component={ SingleProduct } />
          </Switch>
      <Footer />
    </main>
  );
}

export default App;
