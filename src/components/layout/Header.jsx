import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-5 m-auto font-bold max-w-7xl">
      <Link className="lg:text-4xl" to="/">#VANILIFE</Link>
      <div className="flex gap-8">
        <Link className="lg:text-4xl" to="/host">Host</Link>
        <Link className="lg:text-4xl" to="/about">About</Link>
        <Link className="lg:text-4xl" to="/vans">Vans</Link>
      </div>
    </div>
  );
};
export default Header;
