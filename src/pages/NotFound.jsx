import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="h-screen mt-24 text-center">
            <h1 className="mb-10 text-5xl ">Sorry, the page you were looking for was not found.</h1>
            <Link className="p-4 text-3xl text-white bg-black rounded-lg" to="/">Return to Home</Link>
        </div>
    )
}
