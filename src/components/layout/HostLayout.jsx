import { NavLink, Outlet } from "react-router-dom";
const HostLayout = () => {
    
  return (
    <>
      <div className="flex justify-center gap-6 text-2xl text-gray-500">
        <NavLink className={({isActive}) => isActive?" underline decoration-red-400 ": null } end to="/host">Dashboard</NavLink>
        <NavLink className={({isActive}) => isActive?" underline decoration-red-400 ": null } to="/host/income">Income</NavLink>
        <NavLink className={({isActive}) => isActive?" underline decoration-red-400 ": null } to="/host/vans">Vans</NavLink>
        <NavLink className={({isActive}) => isActive?" underline decoration-red-400 ": null } to="/host/reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
