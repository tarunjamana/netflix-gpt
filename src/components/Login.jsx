import { use, useState } from "react"
import Header from "./Header"

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
      setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
        <Header />
        <div className="absolute w-full h-screen">
        <img className="w-full h-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg" 
        alt="logo" />
        </div>
        <form className="w-3/12 mx-auto p-12 absolute my-36 left-0 right-0 bg-black text-white rounded-lg bg-opacity-90">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-800" />}
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800" />
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800" />
            <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to netflix? Sign Up Now" : "Already Registered Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login