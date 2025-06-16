import { Button } from "@/components/ui/button"
import { Route, Routes } from "react-router-dom"
import AuthLayout from "./auth/AuthLayout"
import './index.css';
import SigninForm from "./auth/forms/SigninForm"
import SignupForm from "./auth/forms/SignupForm"
import RootLayout from "./root/RootLayout"
import Home from "./root/pages/Home"

function App() {

  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index path='/' element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App