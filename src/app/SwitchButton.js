import { useContext } from "react";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { AppContext } from "./context";

import "./SwitchButton.css";

function SwitchButton() {
  const { showTable, setShowTable } = useContext(AppContext);

  return (
    <div className="switch-button">
      <FormGroup>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Chart</Typography>
          <Switch
            checked={showTable}
            onChange={(event) => setShowTable(event.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography>Table</Typography>
        </Stack>
      </FormGroup>
    </div>
  );
}
export default SwitchButton;
