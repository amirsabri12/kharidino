import { Route, Routes } from "react-router";

import RootLayuots from "./layuots/Layuots.tsx";

import "./App.css";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import SignupForm from "./components/Authentication/SignUp/SignUp.tsx";
import QueryProvider from "./Providers/Query.provider.tsx";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route element={<RootLayuots />}>
          <Route index element={<Home />} />
          <Route path={"about"} element={<About />} />
          <Route path={"signup"} element={<SignupForm />} />
        </Route>
      </Routes>
    </QueryProvider>
  );
}

export default App;
