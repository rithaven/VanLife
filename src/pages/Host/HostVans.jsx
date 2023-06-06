import { useState,useEffect } from "react"
import { Link } from "react-router-dom"


export default function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const hostVansEls = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
        >
            <div className="p-6 my-10 bg-white w-[500px] md:w-[1000px] flex gap-6" key={van.id}>
                <img className="h-40 md:h-40" src={van.imageUrl} alt={`Van: ${van.name}`} />
                <div className="gap-6 text-2xl font-bold">
                    <h3 className="my-3">{van.name}</h3>
                    <p className="my-3 text-gray-500">${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section className="max-w-5xl m-auto mt-10">
            <h1 className="ml-24 text-3xl font-bold">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}