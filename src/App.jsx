import { useState } from "react";
import Layout from "./layouts/Layout";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
