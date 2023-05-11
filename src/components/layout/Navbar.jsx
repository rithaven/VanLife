import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 m-auto font-bold max-w-7xl">
      <Link className="text-4xl" to="/">#VANILIFE</Link>
      <div className="flex gap-8">
        <Link className="text-4xl" to="/about">About</Link>
        <Link className="text-4xl" to="/vans">Vans</Link>
      </div>
    </div>
  );
};
export default Navbar;
