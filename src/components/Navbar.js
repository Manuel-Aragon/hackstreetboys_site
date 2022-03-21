
   
import React, { useContext } from 'react'
import { auth } from '../firebase-config'

export const Navbar = ({ user }) => {


    return (
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 fixed-top">
         <div class="container">
           <ul class="navbar-nav ms-auto">
           <li class="nav-item">
               <a href="#learn" class="nav-link">Hackstreet Boys</a>
             </li>
             <li class="nav-item">
               <a href="#learn" class="nav-link">Merch</a>
             </li>
             <li class="nav-item">
               <a href="#learn" class="nav-link">Events</a>
             </li>
             <li class="nav-item">
               <a href="#learn" class="nav-link">Anouncements</a>
             </li>
             <li class="nav-item">
               <a href="#learn" class="nav-link">Bio</a>
             </li>
           </ul>
           <div class="collapse navbar-collapse" id="navmenu">
             <ul class="navbar-nav ms-auto">
               <li class="nav-item">
                   <li class="nav-item">
                       <button type="button" class="btn btn-secondary">TICKET</button>
                     </li>
                   <li class="nav-item">
                     <button type="button" class="btn btn-secondary">CART</button>
                   </li>
                   <button type="button" class="btn btn-danger">LOGOUT</button>
                 </li>
                 <li class="nav-item">
                   <button type="button" class="btn btn-primary">Profile</button>
                 </li>
             </ul>
           </div>
         </div>
         
       </nav>
    )
}