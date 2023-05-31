import { useOutletContext } from "react-router-dom"

const HostVanInfo = () => {
    const {currentVan} = useOutletContext()
  return (
    <div className="gap-6 py-6">
            <h4 className="mb-5 md:text-3xl " ><span className="font-bold">Name:</span>{currentVan.name}</h4>
            <h4 className="mb-5 md:text-2xl"><span className="font-bold">Category: </span>{currentVan.type}</h4>
            <h4 className="mb-5 md:text-2xl"> <span className="font-bold">Description:</span> {currentVan.description}</h4>
            <h4 className="mb-5 md:text-3xl"><span className="font-bold">Visibility: </span>public</h4>
    </div>
  )
}

export default HostVanInfo