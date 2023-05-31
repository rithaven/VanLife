import { useOutletContext } from "react-router-dom"


const HostVanPhotos = () => {
    const { currentVan } = useOutletContext()
    return (
        <img src={currentVan.imageUrl} className="mt-6 h-96" alt="" />
    )
}

export default HostVanPhotos