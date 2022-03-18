import axios from "axios";
import { useState, useCallback, createContext } from "react";
export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [artistTop, setArtistTop] = useState([]);
  const [search, setSearch] = useState("Cher");

  const fecthTopartist = useCallback(() => {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=0a2821ab54c37aa53688e0c80a9323fa&format=json"
      )
      .then((response) => setArtistTop(response.data.topartists.artist));
  }, []);

  const fecthsearh = useCallback(() => {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=0a2821ab54c37aa53688e0c80a9323fa&format=json"
      )
      .then((response) =>
        setSearch(response.data.results.artistmatches.artist)
      );
  }, []);

  return (
    <myContext.Provider
      value={{
        fecthTopartist,
        artistTop,
        fecthsearh,
        search,
        setSearch,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
