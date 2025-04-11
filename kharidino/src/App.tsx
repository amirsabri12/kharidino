import { Route, Routes } from "react-router";

import RootLayuots from "./layuots/Layuots.tsx";

import "./App.css";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";

function App() {
  return (
    <Routes>
      <Route element={<RootLayuots />}>
        <Route index element={<Home />} />
        <Route path={"about"} element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
