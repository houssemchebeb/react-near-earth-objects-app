import { useState, useEffect, useContext } from "react";
import { getOrbitalBodies } from "./utils";
import { AppContext } from "./context";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./DropDown.css";

function DropDown() {
  const [options, setOptions] = useState([]);

  const { APIData, selectedOrbitalBody, setSelectedOrbitalBody } =
    useContext(AppContext);

  useEffect(() => {
    setOptions(getOrbitalBodies(APIData));
  }, [APIData]);

  return (
    <div className="drop-down">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Orbital Body</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOrbitalBody}
            label="Orbital Body"
            onChange={(event) => setSelectedOrbitalBody(event.target.value)}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
export default DropDown;
