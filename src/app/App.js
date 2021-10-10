import { useMemo, useState, useEffect } from "react";
import Chart from "./Chart";
import { formatData } from "./utils";
import { AppContext } from "./context";
import { NEO_API } from "./constants";

function App() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    fetch(NEO_API)
      .then((response) => response.json())
      .then((data) => setAPIData(data))
      .catch((error) => {
        alert("Fetching data failed!");
      });
  }, []);

  const data = useMemo(() => formatData(APIData), [APIData]);

  return (
    <AppContext.Provider value={data}>
      <Chart />
    </AppContext.Provider>
  );
}

export default App;
