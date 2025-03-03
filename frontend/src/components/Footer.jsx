import React from 'react'
import { Link } from 'react-router'
import "../index.css"
import { useAuthStore } from '../store/authStore'

const Footer = () => {
  const {user} = useAuthStore()
  
  return (
    
    user ? (
    <div className="relative custom-blur w-full opacity-100 to-black/10  px-4 md:px-30 md:text-lg">
      <h3 className="border-[#004a71] text-[#288aeb] italic md:pb-12 sm:pt-13 pb-10">Designed and developed by <Link to={"/yourlink"} className='text-[#e6f4f1]'>Elijah T.</Link></h3>
    </div>) : (
      <div className="absolute custom-blur bottom-0 w-full bg-blend-color-burn pt-5 text-[#f5f5f5] px-10 md:px-22 md:text-lg">
      <p className=" border-[#004a71] italic pb-8 pt-5">Designed and developed by <Link to={"/yourlink"} className='text-[#288aeb]'>Elijah T.</Link></p>
    </div>)
  )
  
}

export default Footer
