import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Wait from "./pages/Wait";
import Validation from "./pages/Validation";
import Quizz from "./pages/Quizz";
import Score from "./pages/Score";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wait" element={<Wait />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/score" element={<Score />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
