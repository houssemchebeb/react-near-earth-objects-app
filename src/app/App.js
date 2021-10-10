import { useMemo, useState, useEffect } from "react";
import Chart from "./Chart";
import DropDown from "./DropDown";
import { formatData } from "./utils";
import { AppContext } from "./context";
import { NEO_API } from "./constants";

function App() {
  const [APIData, setAPIData] = useState([]);
  const [selectedOrbitalBody, setSelectedOrbitalBody] = useState("");

  useEffect(() => {
    fetch(NEO_API)
      .then((response) => response.json())
      .then((data) => setAPIData(data))
      .catch((error) => {
        alert("Fetching data failed!");
      });
  }, []);

  const data = useMemo(
    () => formatData(APIData, selectedOrbitalBody),
    [APIData, selectedOrbitalBody]
  );

  const value = useMemo(
    () => ({
      data,
      APIData,
      selectedOrbitalBody,
      setSelectedOrbitalBody,
    }),
    [data, APIData, selectedOrbitalBody, setSelectedOrbitalBody]
  );

  return (
    <AppContext.Provider value={value}>
      <DropDown />
      <Chart />
    </AppContext.Provider>
  );
}

export default App;
