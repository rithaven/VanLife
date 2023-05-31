import { Link, NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-5 m-auto font-bold max-w-7xl">
      <Link className="lg:text-4xl" to="/">#VANILIFE</Link>
      <div className="flex gap-8 lg:text-4xl">
        <NavLink className={({isActive}) => isActive?" underline decoration-red-400 ": null } to="/host">Host</NavLink>
        <NavLink className={({isActive}) => isActive?" underline decoration-red-400 ": null }  to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive?" underline decoration-red-400 ": null }  to="/vans">Vans</NavLink>
      </div>
    </div>
  );
};
export default Header;
