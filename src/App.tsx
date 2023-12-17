import { Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
