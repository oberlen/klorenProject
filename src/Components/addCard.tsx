import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCradComponent() {
  const [newData, setNewData] = useState({ icon: "", title: "" });
  const navigate = useNavigate();

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2 },
        }}
        noValidate
        autoComplete="off"
        style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
      >
        <h2>Add Organization Name: </h2>
        <TextField
          fullWidth
          type="text"
          onChange={(e) => setNewData({ ...newData, icon: e.target.value })}
          label="Icon:"
        />
        <br />
        <TextField
          fullWidth
          type="text"
          onChange={(e) => {
            setNewData({ ...newData, title: e.target.value });
          }}
          label="Title:"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="contained" onClick={() => {}}>
            {/* <Button variant="contained" onClick={() => {dispatch[type:"Add",payload:newData]}}> */}
            Add
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default AddCradComponent;
