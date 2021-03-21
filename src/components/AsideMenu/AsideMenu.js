import './AsideMenu.scss';
import {NavLink} from "react-router-dom";

function AsideMenu() {
  return (
    <div className="AsideMenu">
        <nav>
            <ul className="AsideMenu__List">
                <li className="AsideMenu__Item"><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li className="AsideMenu__Item"><NavLink to="/products" activeClassName="active">Products</NavLink></li>
                <li className="AsideMenu__Item"><NavLink to="/contacts" activeClassName="active">Contacts</NavLink></li>
                <li className="AsideMenu__Item"><NavLink to="/cabinet" activeClassName="active">Cabinet</NavLink></li>
                <li className="AsideMenu__Item"><NavLink to="/cabinet/rtyrt" activeClassName="active">В нікуди</NavLink></li>
            </ul>
        </nav>
    </div>
  );
}

export default AsideMenu;
