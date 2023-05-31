import { Link } from "react-router-dom"
export default function Income() {
    return (
        <div className="my-10">
            <h1 className="text-5xl font-bold">Income page goes here</h1>
            <Link className="text-blue-400 underline" to="something">Click me</Link>
        </div>
    )
}