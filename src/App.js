import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Navigation/_footer";
import Navbar from "./components/Navigation/_navbar";

import './assets/scss/main.scss';
import './assets/scss/global/_reset.scss';
import SingleProduct from "./pages/SingleProduct";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <main>
      <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/products" component={ ProductList } />
            <Route path="/products/:slug" component={ SingleProduct } />
          </Switch>
      <Footer />
    </main>
  );
}

export default App;
