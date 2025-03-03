import React from 'react'
import { Link } from 'react-router'
import { useAuthStore } from '../store/authStore'
import toast from 'react-hot-toast'
import '../index.css'

const Navbar = ({handleAuthForm}) => {
  const {user,logout} = useAuthStore();

  console.log("User", user);

  const handleLogout = async () => {
      const {message} = await logout();
      toast.success(message);
  }
  return (
    <header className="opacity-100">
        {user ? (

          
    <nav className="absolute w-full custom-blur opacity-100 z-10 bg-black-700/10 flex justify-between items-center text-[#FFFCF2] px-10 md:px-22">
        
        <Link className="p-10"to="/" onClick={()=>handleAuthForm('default')}><label className="pt-20 alfa-slab-one-regular md:py-10  md:text-4xl lg:text-4xl cursor-pointer">BookQuest</label>
        </Link>
            <div className="flex items-center md:text-lg"> 
            <Link to={"/add-book"}><p className="teko hover:bg-[#a4abbd]/20 px-4 rounded-xl p-5 pr-5 pl-5">Add Book</p></Link>
            <Link to={"/mybooks"}><p className="teko hover:bg-[#a4abbd]/10 px-4 rounded-xl p-5 pr-5 pl-5">Bookshelf</p></Link>
            <p className="teko cursor-pointer hover:bg-[#e1587f]/20 px-4 rounded-xl p-5 pr-5 pl-5" onClick={handleLogout} >Logout ({user.username})</p>
           </div>
           </nav>
           
          ): (
          <header className="opacity-100">
    <nav className="fixed w-full opacity-100 z-10 bg-clip-padding custom-blur bg-black-700/10 flex justify-between items-center text-[#FFFCF2] px-10 md:px-22 py-4 md:py-6 ">
        
        <Link to="/" onClick={()=>handleAuthForm('default')}><label className="alfa-slab-one-regular md:text-4xl lg:text-4xl cursor-pointer">BookQuest</label>
        </Link>
            <div className="flex items-center space-x-8 md:text-lg">
              <p onClick={() => handleAuthForm('login')} className="teko cursor-pointer">Log in</p>
              <p onClick={() => handleAuthForm('signup')} className="teko cursor-pointer bg-[#403D39] px-3 py-2">Sign up</p> 
            {/* <Link to={"/login"}><p className="teko">Sign in</p></Link>
            <Link to={"/signup"}><p className="teko bg-[#403D39] px-3 py-2">Sign up</p></Link> */}
        </div>
        </nav>
        </header>
        )}
        </header>
  )
}

export default Navbar
