import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react'
import { useAuthStore } from '../store/authStore'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'

const Signup = ({handleAuthForm}) => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")


    const {signup, isLoading, error} = useAuthStore();
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            if(password !== confirmPassword){
                // toast notification
                toast.error("Password must match.")
                return;
            }

            await signup(username, email, password);
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div className="relative custom-blur border-3 border-[#a4abbd]/5 rounded-xl my-60 w-100 h-120 mx-auto pl-5 pr-5">

        <form onSubmit={handleSignup} className="flex flex-col mt-7 items-center mx-auto space-y-4">
            <div className="flex flex-col w-full">
                <label className="md:text-lg">Username: </label>
                <input 
                    type="text" 
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"/>
            </div>
            <div className="flex flex-col w-full">
                <label className="md:text-lg">Email: </label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500" />
            </div>
            <div className="flex flex-col w-full">
                <label className="md:text-lg">Password: </label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500" />
            </div>
            <div className="flex flex-col w-full">
                <label className="md:text-lg">Confirm password: </label>
                <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500" />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button type="submit" disabled={isLoading} className="w-full bg-[#288aeb] hover:bg-[#00b7fa] text-[#FFFCF2] py-2 font-medium rounded-lg cursor-pointer">
                {isLoading ? "Please wait..." : "Sign up"}
            </button>
            
            <p className="text-xl">Already have an account? <span className="text-[#288aeb] cursor-pointer" onClick={()=>{handleAuthForm('login')}}>Login</span></p>
        </form>
    </div>
  )
}

export default Signup
