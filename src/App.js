
import React,{useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Bio } from './components/Bio'
import { Events } from './components/Events'
import { Merch } from './components/Merch'
import { Announcements } from './components/Announcements'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { NotFound } from './components/NotFound'
import { Navbar } from './components/Navbar'
import {auth,fs} from './firebase-config'

export function GetCurrentUser(){
  const [user, setUser]=useState(null);
  useEffect(()=>{
      auth.onAuthStateChanged(user=>{
          if(user){
              fs.collection('users').doc(user.uid).get().then(snapshot=>{
                  setUser(snapshot.data().FullName);
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
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Bio' element={<Bio />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Announcements' element={<Announcements />} />
          <Route path='/Merch' element={<Merch />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App