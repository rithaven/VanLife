import { Link } from "react-router-dom";
import HeroImg from "../images/home-hero.png";

export default function Home() {
  return (
    <div className="relative h-screen">
      <img src={HeroImg} className="object-cover w-full h-screen" alt="vans" />
      <div className="absolute text-white left-10 right-10 lg:left-40 lg:top-60 lg:right-40 top-60">
        <h1 className="mb-10 text-3xl font-bold lg:mb-8 lg:text-7xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="mb-10 font-bold lg:text-2xl">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          className="inline-block w-full p-4 mt-6 text-2xl font-bold text-center text-white no-underline bg-orange-500 rounded cursor-pointer "
          to="vans"
        >
          Find your van
        </Link>
      </div>
    </div>
  );
}
