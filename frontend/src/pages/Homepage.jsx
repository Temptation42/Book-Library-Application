import React from 'react'
import Hero from '../components/Hero'
import BookList from '../components/BookList'
import { useAuthStore } from '../store/authStore'

const Homepage = ({authForm,handleAuthForm}) => {

  const {user} = useAuthStore();
  
  return (
    user ? (<div>
      <Hero authForm={authForm} handleAuthForm={handleAuthForm}/>
      <BookList/>
    </div>) : (<div>
      <Hero authForm={authForm} handleAuthForm={handleAuthForm}/>
    </div>)
    
  )
}

export default Homepage
