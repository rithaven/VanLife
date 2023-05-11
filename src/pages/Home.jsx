import { Link } from "react-router-dom"
import HeroImg from "../images/home-hero.png"

export default function Home() {
    return (
        <div className="relative">
         <img src={HeroImg} className="object-cover w-full" />
            <div className="absolute top-10 left-10 lg:top-80 lg:left-96 lg:w-[700px] text-white">
            <h1 className="font-bold lg:mb-4 lg:text-5xl">You got the travel plans, we got the travel vans.</h1>
            <p className="font-bold lg:text-3xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link className="inline-block p-2 font-bold text-center text-white no-underline bg-orange-500 rounded cursor-pointer w-96 lg:p-4 lg:mt-6 lg:w-full" to="vans">Find your van</Link>
            </div>
        </div>
    )
};