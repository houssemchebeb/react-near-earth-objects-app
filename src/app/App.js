import { useMemo, useState, useEffect } from "react";
import Chart from "./Chart";
import DropDown from "./DropDown";
import Table from "./Table";
import SwitchButton from "./SwitchButton";
import DownloadButton from "./DownloadButton";
import { formatData } from "./utils";
import { AppContext } from "./context";
import { NEO_API } from "./constants";

function App() {
  const [APIData, setAPIData] = useState([]);
  const [selectedOrbitalBody, setSelectedOrbitalBody] = useState("");
  const [showTable, setShowTable] = useState(false);

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
      showTable,
      setShowTable,
      selectedOrbitalBody,
      setSelectedOrbitalBody,
    }),
    [
      data,
      APIData,
      showTable,
      setShowTable,
      selectedOrbitalBody,
      setSelectedOrbitalBody,
    ]
  );

  return (
    <AppContext.Provider value={value}>
      <SwitchButton />
      <DownloadButton />
      <DropDown />
      {showTable ? <Table /> : <Chart />}
    </AppContext.Provider>
  );
}

export default App;
