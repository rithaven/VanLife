import { Link, Outlet } from "react-router-dom";
const HostLayout = () => {
  return (
    <>
      <div className="flex justify-center gap-6 text-2xl font-bold">
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
