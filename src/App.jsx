import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Vans/Home";
import About from "./pages/Vans/About";
import Vans from "./pages/Vans/Vans";
import "./Server";
import Footer from "./components/layout/Footer";
import VansDetail from "./pages/Vans/VansDetail";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/layout/HostLayout";
function App() {
  return (
    <>
       <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VansDetail />} />
          </Route>
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="host/income" element={<Income />} />
            <Route path="host/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
  
    </>
  );
}

export default App;
