import React from "react";
import classes from "./cards.module.css";

const Cards = ({ artist }) => {
  return (
    <div className={classes.cards}>
      <div className={classes.img}>
        <img src={artist.image[2]["#text"]} alt="" />
      </div>
      <div className={classes.list}>
        <h4>{artist.name}</h4>
      </div>
    </div>
  );
};

export default Cards;
