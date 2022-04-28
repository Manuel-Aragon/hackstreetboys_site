
import React,{useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Bio } from './components/Bio'
import { EventPage } from './components/Events/EventPage'
import { Merch } from './components/Merch/Merch'
import { AnnouncementsPage } from './components/Announcements/AnnouncementsPage'
import { Register } from './components/Register'
import { Login } from './components/Login'
import {auth,fs} from './firebase-config'
import { Cart } from './components/Cart/Cart'
import {NotFound} from './components/NotFound'
import {AddProducts} from './components/Merch/AddProduct'
import {AddEvents} from './components/Events/AddEvent'
import { AddAnnouncements } from './components/Announcements/AddAnnouncement'
import { Reservation} from './components/Reservations/Reservations'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export function GetCurrentUser(){
  const [user, setUser]=useState(null);
  useEffect(()=>{
    
      auth.onAuthStateChanged(user=>{
          if(user){
              fs.collection('users').doc(user.uid).get().then(snapshot=>{
                  setUser(snapshot.data().Name);
              })
          }
          else{
              setUser(null);
          }
      })
  },[])
  return user;
}

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Bio' element={<Bio />} />
          <Route path='/Events' element={<EventPage/>} />
          <Route path='/Announcements' element={<AnnouncementsPage />} />
          <Route path='/Merch' element={<Merch />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cart' element ={<Cart />} />
          <Route path="/add" element={<AddProducts/>}/>    
          <Route path="/addevent" element={<AddEvents/>}/>
          <Route path="/addnews" element={<AddAnnouncements/>}/>
          <Route path='/Reservations' element ={<Reservation />} />
          <Route element={NotFound}/>       
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App