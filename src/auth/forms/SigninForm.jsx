import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SigninValidation } from '../formsValidation'
import { Link } from 'react-router-dom'
import google_logo from '../../assets/google-logo.webp'
import { signInAccount, signUpWithGoogle,  } from '../../appwrite/auth'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

function SigninForm() {
  const navigate = useNavigate()
  const { checkAuthUser } = useAuthContext()

  const form = useForm({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Defining a submit handler.
  async function onSubmit(values) {

    const session = await signInAccount(values)
    if (!session) {
      toast("Sign In failed. Please try again later.")
      navigate('/sign-in')

      return;
    }

    const isLoggedIn = await checkAuthUser()

    if (isLoggedIn) {
      form.reset()
      navigate('/')
    } else {
      return toast("Sign In failed. Please try again later.")
    }
  }

  const signWithGoogle = () => {
      signUpWithGoogle()
  };

  return (
    <Form {...form}>
      <div className="sm:w-100 flex-center flex-col pl-1.5 pr-1.5">
        <h2 className="h3-bold md:h2-bold pt-4 sm:pt-5">Sign into your account</h2>
        <p className="text-gray-500 small-medium font-normal md:base-regular mt-1">To use this app, please enter your account details</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder='Enter your email' className="h-11 bg-transparent border-gray-300 placeholder:text-gray-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder='Enter your password' className="h-11 bg-transparent border-gray-300 placeholder:text-gray-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className='text-[15px] py-5 bg-black cursor-pointer'>Sign In</Button>

          <Button type='button' onClick={signWithGoogle} className='border-gray-300 border text-black text-[15px] bg-transparent px-3 py-5 w-full transition-all duration-200 hover:text-white hover:bg-black cursor-pointer'><img src={google_logo} className='w-6 h-6 mr-1' />Sign In with Google</Button>

          <p className="text-small-regular text-gray-600 text-center mt-2">
            Don't have an account?
            <Link to="/sign-up" className="text-primary-600 text-small-semibold ml-1 hover:underline transition-all duration-75">Sign Up</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SigninForm
