import { useEffect, useState } from "react";

export default function Vans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    const VanDetails = vans.map(van => (
        <div key={van.id} className="transition duration-300 ease-in-out lg:grid-cols-2 hover:scale-90 hover:bg-white hover:pl-6 hover:py-4 hover:shadow-2xl hover:rounded-lg">
            <img className="lg:h-[400px] hover:h-[400px] h-[400px]" src={van.imageUrl} alt=""/>
            <div className="grid gap-2 py-2 ">
                <h3 className="font-bold ">{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <button className={`rounded-lg text-white ${van.type} bg-[#e1734f] px-6 py-2`}>{van.type}</button>
        </div>
    ))
  return (
    <div className="gap-4 p-16 hover:shadow-2xl hover:shadow-white">
      <h1 className="mb-8 text-2xl font-bold lg:text-3xl">Explore our van options</h1>
      <div className="grid items-center grid-cols-2 gap-4 p-4 lg:flex mb-14">
        <button className="bg-[#ffead0] rounded-lg p-4 hover:bg-[#e17654]">Simple</button>
        <button className="bg-[#ffead0] rounded-lg p-4 hover:bg-[#161616] hover:text-white">Luxury</button>
        <button className="bg-[#ffead0] rounded-lg p-4 hover:bg-[#115e59] hover:text-white">Rugged</button>
        <p className="underline">Clear filters</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {VanDetails}
      </div>
    </div>
  );
};


