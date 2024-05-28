import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ isAllowed, children }) => {
    if (isAllowed) {
        return children
    }

return <Navigate to="/"></Navigate>
    
}