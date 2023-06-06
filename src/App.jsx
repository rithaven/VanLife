import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Vans/Home";
import About from "./pages/Vans/About";
import Vans from "./pages/Vans/Vans";
import VansDetail from "./pages/Vans/VansDetail";
import HostVans from "./pages/Host/HostVans";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/layout/HostLayout";
import HostVanDetail from "./pages/Host/HostVanDetail";
import NotFound from "./pages/NotFound";

import "./Server";
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
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
            <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
  
    </>
  );
}

export default App;
