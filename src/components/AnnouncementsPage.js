import React,{useState, useEffect} from 'react'
import { Navbar } from './Navbar'
import { Announcements } from './Announcements'
import { Footer } from './Footer'
import {auth,fs} from '../firebase-config'

export const AnnouncementsPage = () => {
        // gettin current user uid
        function GetUserUid(){
            const [uid, setUid]=useState(null);
            useEffect(()=>{
                auth.onAuthStateChanged(user=>{
                    if(user){
                        setUid(user.uid);
                    }
                })
            },[])
            return uid;
        }
    
        const uid = GetUserUid();
        console.log(uid);
    // getting current user function
    function GetCurrentUser(){
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

    const user = GetCurrentUser();
    console.log(user);
    
    // state of events
    const [announcements, setAnnouncements]=useState([]);

    // getting events function
    const getannouncements = async ()=>{
        const announcements = await fs.collection('Announcements').get();
        const announcementsArray = [];
        for (var snap of announcements.docs){
            var data = snap.data();
            data.ID = snap.id;
            announcementsArray.push({
                ...data
            })
            if(announcementsArray.length === announcements.docs.length){
                setAnnouncements(announcementsArray);
            }
        }
    }

    useEffect(()=>{
        getannouncements();
    },[])
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div class="container-fluid p-2 bg-dark">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-center right-bck p-4">
                        <div class="registration-right">
                            <h2>Announcements</h2>
                            <div className='event-list'>
                            <br></br>
                                {announcements.length > 0 && (
                                    <div>
                                        <div class="card flex-row">
                                                <div class="card-body">
                                                        <Announcements announcements={announcements}/>
                                                </div>
                                        </div>
                                    </div>
                                )}
                                {announcements.length < 1 && (
                                    <div className='container-fluid'>Please wait....</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>    
    )
}