import bgImg from "../images/about-hero.png"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="text-[#161616] px-2 ">
            <img src={bgImg} className="w-full" />
            <div className="p-4 m-auto max-w-7xl">
            <div className="p-6 mb-14">
                <h1 className="text-3xl font-bold mb-7">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="mb-10 text-2xl ">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className="text-2xl">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="bg-[#FFCC8D] text-[#161616] px-8 pb-8 rounded-md items-center">
                <h2 className="py-5 text-3xl font-bold " >Your destination is waiting.Your van is ready.</h2>
                <Link className="bg-[#161616] rounded-lg text-white p-4" to="/vans">Explore our vans</Link>
            </div>
            </div>
            
        </div>
  )
}

export default About