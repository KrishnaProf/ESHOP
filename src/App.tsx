import { useState } from "react";
import Navbar from "./components/Navbar";

import "./App.css";
import Darkmode from "./components/Darkmode";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Darkmode />
      </div>
    </>
  );
}

export default App;
