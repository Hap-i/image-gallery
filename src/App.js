import { Route, Routes } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="gallery" element={<Gallery />}></Route>
    </Routes>
  );
}

export default App;
