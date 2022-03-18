import React, { useContext, useEffect } from "react";
import classes from "./main.module.css";
import { myContext } from "../../Context/context";
import Cards from "../../Components/Cards/Cards";
import { Link } from "react-router-dom";
const Main = () => {
  const { fecthTopartist, artistTop, fecthsearh, search, setSearch } =
    useContext(myContext);

  useEffect(() => {
    fecthTopartist();
  }, [fecthTopartist]);

  useEffect(() => {
    fecthsearh();
  }, [fecthsearh]);

  const Handlerclicksearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.main}>
      <div className={classes.div1}>
        <Link to="/">
          <h1>YrMusica</h1>
        </Link>
        <div>
          <input
            type="text"
            placeholder="nach Artist suchen!..."
            onChange={Handlerclicksearch}
          />
        </div>
        <Link to="/artistto">
          <h4>Artistto</h4>
        </Link>
      </div>

      <div className={classes.div2}>
        {artistTop
          .filter((artist) => artist.name.include(search))
          .slice(0, 10)
          .map((artist) => (
            <Cards key={artist.mbid} artist={artist} />
          ))}
      </div>
    </div>
  );
};

export default Main;
