import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;
  const vanElements = displayedVans.map((van) => (
    <div
      key={van.id}
      className="transition duration-300 ease-in-out lg:grid-cols-2 hover:scale-90 hover:bg-white hover:pl-6 hover:py-4 hover:shadow-2xl hover:rounded-lg"
    >
      <Link
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
      >
        <img
          className="lg:h-[400px] hover:h-[400px] h-[400px]"
          src={van.imageUrl}
          alt=""
        />
        <div className="grid gap-2 py-2 ">
          <h3 className="font-bold ">{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <button
          className={`rounded-lg text-white ${van.type} bg-[#e1734f] px-6 py-2`}
        >
          {van.type}
        </button>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1 className="h-screen text-3xl font-bold text-center mt-14">There was an error: {error.message}</h1>
}
  return (
    <div className="gap-4 p-16 hover:shadow-2xl hover:shadow-white">
      <h1 className="mb-8 text-2xl font-bold lg:text-3xl">
        Explore our van options
      </h1>
      <div className="grid items-center grid-cols-2 gap-4 p-4 lg:flex mb-14">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`bg-[#ffead0] rounded-lg p-4 hover:bg-[#e17654] ${
            typeFilter === "simple" ? "bg-[#e17654]" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`bg-[#ffead0] rounded-lg p-4 hover:bg-[#161616] hover:text-white ${
            typeFilter === "luxury" ? "bg-[#161616]" : ""
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`bg-[#ffead0] rounded-lg p-4 hover:bg-[#115e59] hover:text-white ${
            typeFilter === "rugged" ? "bg-[#115e59]" : ""
          }`}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button onClick={() => setSearchParams(".")} className="underline">
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="grid gap-8 lg:grid-cols-3">{vanElements}</div>
    </div>
  );
}
