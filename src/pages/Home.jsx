import UsernameForm from "../components/user/UsernameForm"
import { Navigate } from "react-router-dom";
import { getUsername } from "../app/features/userSlice";
import { useSelector } from "react-redux";

function Home() {

    const username = useSelector(getUsername);

    return (
        username === ''
            ?
            <div className="text-center mt-16">
                <h1 className="font-bold text-2xl md:text-3xl text-gray-700">
                    The best Pizza.
                    <br />
                    <span className="text-yellow-500">Straight out of the hoven, straight to you</span>
                </h1>
                <UsernameForm />
            </div>
            : <Navigate to="/menu" />

    )
}

export default Home