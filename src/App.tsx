import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Room from "./pages/Room";
import Validation from "./pages/Validation";
import Quizz from "./pages/Quizz";
import Score from "./pages/Score";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Navigate to="/home" replace />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/score" element={<Score />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
