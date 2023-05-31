
import { useParams,Link, Outlet,NavLink } from "react-router-dom"
import { useState,useEffect } from "react"
 
export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [id])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }
 
    return (
        <section>
              <Link
                to=".."
                relative="path"
                className="mt-24 md:ml-36"
            >&larr; <span>Back to all vans</span></Link>

            <div className="mt-2">
                <div className="bg-white max-w-5xl m-auto  w-[500px] p-10 md:max-w-7xl md:w-full">
                <div className="flex gap-4">
                    <img className="h-40 md:w-[700px] md:h-[600px]" src={currentVan.imageUrl} alt="" />
                    <div className="grid gap-2">
                        <i
                            className={`rounded-lg bg-orange-400 w-40 text-center  pt-2 h-20 md:w-40 text-white font-bold text-4xl van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3 className="text-2xl font-bold">{currentVan.name}</h3>
                        <h4 className="text-2xl text-gray-500">${currentVan.price}/day</h4>
                    </div>
                   
                    
                    </div>
                    <div className="flex gap-16 mt-10 font-bold md:text-4xl">
                    <NavLink
                        to="."
                        end
                        className={({ isActive }) => isActive ? "underline decoration-red-400 " : null}
                    >
                        Details
                    </NavLink>
                    
                    <NavLink
                        to="pricing"
                        className={({ isActive }) => isActive ? "underline decoration-red-400 " : null}
                    >
                        Pricing
                    </NavLink>
                    
                    <NavLink
                        to="photos"
                        className={({ isActive }) => isActive ? "underline decoration-red-400 " : null}
                    >
                        Photos
                    </NavLink>
                    </div>
                    <Outlet context={{currentVan}} />
                </div>
            </div>
        </section>
    )
}
