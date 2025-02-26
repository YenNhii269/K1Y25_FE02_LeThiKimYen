import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Bai1 from "./components/Bai1";
import Bai2 from "./components/Bai2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bai1" element={<Bai1 />} />
        <Route path="/bai2" element={<Bai2 />} />
      </Routes>
    </Router>
  );
}

export default App;
