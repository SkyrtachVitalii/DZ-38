import './NotFound404.scss';
import {Link} from "react-router-dom";

function NotFound404() {

  return (
    <div className="NotFound404">
        <h1>404</h1>
        <p1>Сторінку не знайдено <Link to="/">Повернутися на головну</Link></p1>
    </div>
  );
}

export default NotFound404;