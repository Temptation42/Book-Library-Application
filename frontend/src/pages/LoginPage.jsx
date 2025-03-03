import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router'
import { useState } from 'react'
import { useAuthStore } from '../store/authStore'
import { useNavigate } from 'react-router'
import BgVideo from "../components/bg_video.mp4"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, isLoading, error} = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const {message} = await login(email, password);
      toast.success(message);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="relative h-[100vh] lg:h-[100vh] text-[#FFFCF2] px-4 md:px-12 overflow-hidden">
      <div className="bg-[#404756] w-full h-full absolute top-0 left-0 opacity-80 -z-10"></div>
        <div className="absolute inset-0 -z-20">
              <video className="object-cover object-center w-full h-full" autoPlay loop muted>
                  <source src={BgVideo} type="video/mp4"/>
              </video>
        </div>
        <h2 className='text-center font-semibold pt-8 md:text-2xl w-full max-w-xl mx-auto'>Log in</h2>

        <form onSubmit={handleLogin} className="flex flex-col  items-center w-full max-w-xl mx-auto space-y-4 my-60" >
            
            <div className="flex flex-col w-full">
                <label className="md:text-lg">Email: </label>
                <input type="email" 
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                      className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500" />
            </div>
            <div className="flex flex-col w-full">
                <label className="md:text-lg">Password: </label>
                <input type="password" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500" />
            </div>

            {error && <p className="text-red-500">{error}</p>}

<button type="submit" disabled={isLoading} className="w-full bg-[#403D39] text-[#FFFCF2] py-2 font-medium rounded-lg">
    {isLoading ? "Please wait..." : "Log in"}
</button>
            <p>Don&apos;t have an account? <Link to={"/signup"} className="text-[#94442">Sign up</Link></p>
        </form>
    </div>
  )
}

export default LoginPage
