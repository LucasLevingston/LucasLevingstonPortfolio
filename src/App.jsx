import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/LucasLevingston.github.io/sobre"
          element={<Sobre />}
        />
        <Route
          exact
          path="/LucasLevingston.github.io/projetos"
          element={<Projects />}
        />
        <Route exact path="/LucasLevingston.github.io" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
