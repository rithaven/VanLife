import "./index.css";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/layout/Navbar";
import Vans from "./pages/Vans"
import Server from "./Server"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={< About/>}/>
      <Route path="/vans" element={<Vans/>}/>
    </Routes>
    </>
  );
}

export default App;