import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
// import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignupValidation } from '../formsValidation'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export function SignupForm() {
  // const navigate = useNavigate()
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <div className="sm:w-100 flex-center flex-col pl-1.5 pr-1.5">
        <h2 className="h3-bold md:h2-bold pt-4 sm:pt-5">Create a new account</h2>
        <p className="text-gray-500 small-medium font-normal md:base-regular mt-1">To use this app, please enter your account details</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full mt-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder='Enter your name' className="h-11 bg-transparent border-gray-300 placeholder:text-gray-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder='Enter your username' className="h-11 bg-transparent border-gray-300 placeholder:text-gray-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
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
            name="username"
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
  
          <Button type="submit" className='text-[16px] py-6 cursor-pointer'>Sign Up</Button>

          <p className="text-small-regular text-gray-600 text-center mt-2">
            Already have an account?
            <Link to="/sign-in" className="text-primary-600 text-small-semibold ml-1 hover:underline transition-all duration-75">Sign In</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignupForm
