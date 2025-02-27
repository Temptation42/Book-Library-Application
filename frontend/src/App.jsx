import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Addbook from './pages/Addbook'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { Routes, Route } from 'react-router'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import RedirectAuthenticatedUsers from './providers/RedirectAuthenticatedUsers'
import RedirectUnAuthenticatedUsers from './providers/RedirectUnAuthenticatedUsers'
import Footer from './components/Footer'
import Searchpage from './pages/Searchpage'
import Bookpage from './pages/Bookpage'
import Updatepage from './pages/Updatepage'

function App() {
  const {fetchUser, fetchingUser} = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (fetchingUser) {
    return <p>Loading...</p>
  }
  return (
    <>
    <Toaster/>
    <Navbar/>

      <Routes>
        <Route path={"/"} element={<Homepage/>}/>
        <Route path={"/add-book"} element={<RedirectUnAuthenticatedUsers><Addbook/></RedirectUnAuthenticatedUsers>}/>
        <Route path={"/login"} element={<RedirectAuthenticatedUsers><LoginPage/></RedirectAuthenticatedUsers>}/>
        <Route path={"/signup"} element={<RedirectAuthenticatedUsers><SignupPage/></RedirectAuthenticatedUsers>}/>
      
      <Route path="/search" element={<Searchpage/>}/>

      <Route path="/book/:id" element={<Bookpage/>}/>
      <Route path="/book/:id/update" element={<Updatepage/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
