import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) {
    return <div className="w-screen h-screen flex justify-center items-center">
      <div className="border-4 border-neutral-300 border-t-[#141414] rounded-full w-10 h-10 animate-spin" />
    </div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
