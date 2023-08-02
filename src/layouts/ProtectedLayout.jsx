import { Navigate } from "react-router-dom"
import { getUsername } from "../app/features/userSlice"
import { useSelector } from "react-redux"

function ProtectedLayout({ children }) {

    const username = useSelector(getUsername);

    if (!username) return <Navigate to="/" />
    return (
        <> {children} </>
    )
}

export default ProtectedLayout