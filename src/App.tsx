import "./App.css";
import DashboardComponent from "./Components/dashboard";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AddCradComponent from "./Components/addCard";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<DashboardComponent />} />
          <Route path="/addCard" element={<AddCradComponent />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
