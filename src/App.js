import "./App.css";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./components/update/Update";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
