import { Button } from "@/components/ui/button"
import { Route, Routes } from "react-router-dom"
import AuthLayout from "./auth/AuthLayout"
import './index.css';
import SigninForm from "./auth/forms/SigninForm"
import SignupForm from "./auth/forms/SignupForm"
import RootLayout from "./root/RootLayout"
import ProtectedRoute from "./components/ProtectedRoute";
import GoogleCallback from "./root/pages/GoogleCallback";
import Dashboard from "./root/pages/Dashboard";
import HomeIntro from "./root/pages/HomeIntro";
import JobListings from "./root/pages/JobListings";
import Resumes from "./root/pages/Resumes";

function App() {

  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        <Route path="/" element={<HomeIntro />} />
        <Route path="/google-callback" element={<GoogleCallback />} />

        <Route element={
          <ProtectedRoute>
            <RootLayout />
          </ProtectedRoute>
        }>
          <Route path='/dashboard/:id' element={<Dashboard />} />
          <Route path='/job-listings/:id' element={<JobListings />} />
          <Route path='/resume/:id' element={<Resumes />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App