import './App.scss';
import AsideMenu from "./components/AsideMenu/AsideMenu";
import Home from "./views/Home/Home"
import Products from './views/Products/Products';
import Cabinet from "./views/Cabinet/Cabinet";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Contacts from './views/Contacts/Contacts';
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
            <Route exact path="/cabinet">
              <Cabinet />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
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
