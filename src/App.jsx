import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import HomeScreen from "./pages/Homepage/index.jsx";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  // add react router

  return (
    <>
      {/* <HomeScreen /> */}
      {/* <MainNavigation /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
