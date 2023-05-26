
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
const VansDetail = () => {
    const [van, setVan] = useState(null)
    const params = useParams();
    useEffect(() =>{
        fetch(`/api/vans/${params.id}`)
        .then(res=> res.json())
        .then(data => setVan(data.vans))
    }, [params.id])
  return (
    <div className="lg:max-w-[1200px] m-auto sm:max-w-full md:max-w-[800px]  ">
            {van ? (
                <div className="grid gap-6 m-10">
                    <img className='lg:w-[1000px] lg:h-[1000px]  sm:w-full sm:h-[800px]' src={van.imageUrl} alt='van details' />
                    <i className={`font-bold ${van.type} text-2xl bg-black rounded-lg text-white w-52 p-4 text-center `}>{van.type}</i>
                    <h2 className='text-4xl font-bold '>{van.name}</h2>
                    <p className="text-2xl font-bold "><span>${van.price}</span>/day</p>
                    <p className='lg:w-[700px] sm:w-[200px]'>{van.description}</p>
                    <button className="rounded-lg bg-[#ff8c38] text-white font-bold sm:w-96 lg:w-[700px] py-4 mb-4">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
  )
}

export default VansDetail