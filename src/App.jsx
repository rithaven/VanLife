import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "./Server";
import Footer from "./components/layout/Footer";
import VansDetail from "./pages/VansDetail";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
     
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetail />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
