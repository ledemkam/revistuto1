import React from "react";
import { Link } from "react-router-dom";
import classes from "./caom.module.css";

const Artistto = () => {
  return (
    <div className={classes.caom}>
      <div className={classes.div1}>
        <Link to="/">
          <h1>YrMusica</h1>
        </Link>
        <div>
          <input type="text" placeholder="nach Artist suchen!..." />
        </div>
        <Link to="/artistto">
          <h4>Artistto</h4>
        </Link>
      </div>

      <div className={classes.div2}></div>
    </div>
  );
};

export default Artistto;
