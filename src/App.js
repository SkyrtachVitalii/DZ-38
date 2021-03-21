import './App.scss';
import AsideMenu from "./components/AsideMenu/AsideMenu";
import Home from "./views/Home/Home"
import Products from './views/Products/Products';
import ProductsItem from './views/Products/ProductItem';
import Cabinet from "./views/Cabinet/Cabinet";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contacts from './views/Contacts/Contacts';
import Review from './views/Review/Review';
import NotFound404 from './views/NotFound404/NotFound404';

function App() {

  return (
    <Router>
      <div className="App">
        <AsideMenu />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/products/:id">
              <ProductsItem />
            </Route>
            <Route exact path="/cabinet">
              <Cabinet />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
            </Route>
            <Route path="./products/:productId/review/:reviewId">
              <Review />
            </Route>
            <Route exact path="*">
              <NotFound404 />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
