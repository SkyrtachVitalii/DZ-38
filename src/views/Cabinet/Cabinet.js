import React from "react";
import './Cabinet.scss';
import Requests from "../../components/Requests/Requests";

function Cabinet() {

  return (
    <div className="Cabinet">
        <h1>Мій кабінет</h1>
        <Requests />
    </div>
  );
}

export default Cabinet;