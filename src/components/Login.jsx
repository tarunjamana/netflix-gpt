import Header from "./Header"

const Login = () => {
  return (
    <div>
        <Header />
        <div className="absolute w-full h-screen">
        <img className="w-full h-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg" 
        alt="logo" />
        </div>
        <form className="w-3/12 mx-auto p-12 absolute my-36 left-0 right-0 bg-black">
            <input type="text" placeholder="Email Address" className="p-2 m-2" />
            <input type="password" placeholder="Password" className="p-2 m-2" />
            <button className="p-4 m-4">Sign In</button>
        </form>
    </div>
  )
}

export default Login