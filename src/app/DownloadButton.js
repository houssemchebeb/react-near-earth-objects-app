import { useRef, useMemo, useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CSVLink } from "react-csv";
import { formatDataCSV } from "./utils";
import { AppContext } from "./context";
import "./DownloadButton.css";

function DownloadButton() {
  const { data } = useContext(AppContext);
  const csvLink = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    csvLink.current.link.click();
  };

  const CSVdata = useMemo(() => formatDataCSV(data), [data]);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="download-csv">
      <Stack spacing={2} direction="row">
        <Button onClick={handleClick} variant="text">
          Download as CSV
        </Button>
      </Stack>
      <CSVLink
        data={CSVdata}
        filename="nasa.csv"
        className="hidden"
        ref={csvLink}
        target="_blank"
      />
    </div>
  );
}
export default DownloadButton;
