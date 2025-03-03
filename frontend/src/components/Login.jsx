import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router'
import { useState } from 'react'
import { useAuthStore } from '../store/authStore'
import { useNavigate } from 'react-router'
import BgVideo from "../components/bg_video.mp4"
import "../index.css"

const LoginPage = ({handleAuthForm}) => {
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
    <div className="relative custom-blur border-3 border-[#a4abbd]/5 rounded-xl my-60 w-100 h-110 mx-auto pl-5 pr-5">
        <form onSubmit={handleLogin} className="flex flex-col mt-7 items-center mx-auto space-y-4" >
            
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
            

<button type="submit" disabled={isLoading} className="w-full mt-10 bg-[#288aeb] hover:bg-[#00b7fa] text-[#FFFCF2] py-2 font-medium rounded-lg cursor-pointer">
    {isLoading ? "Please wait..." : "Log in"}
</button>
            <p className="text-xl pt-15">Don&apos;t have an account? <span className=" text-[#288aeb] cursor-pointer" onClick={() => handleAuthForm('signup')} >Sign up</span></p>
        </form>
    </div>
  )
}



export default LoginPage
