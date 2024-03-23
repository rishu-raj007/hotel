import { Navigation } from "./Components/Navigation";

import { HashRouter, Route, Routes } from "react-router-dom";
import { Packages } from "./Pages/Packages";
import { HomePage } from "./Pages/HomePage";
import { AboutUs } from "./Pages/AboutUs";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/packages" element={<Packages />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
