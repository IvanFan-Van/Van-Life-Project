import { Link } from "react-router-dom"

export default function Main() {
    return (
        <main>
            <h1 className="title">You got the travel plans, we got the travel vans</h1>
            <p className="text">Add adventure to your life by joining the #vanlife movement.</p>
            <p className="text">Rent the perfect van to make your perfect road trip.</p>
            <Link className="link-button" to="/vans">Find your van</Link>
        </main>
    )
}