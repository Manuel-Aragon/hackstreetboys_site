import React,{useState, useEffect} from 'react'
import { Announcements } from './Announcements'
import {auth,fs} from '../../firebase-config'
import './news.css'
  


export const AnnouncementsPage = ({title}) => {
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

    const user = GetCurrentUser();
    console.log(user);
    
    // state of events
    const [announcements, setAnnouncements]=useState([]);

    // getting events function
    const getannouncements = async ()=>{
        const announcements = await fs.collection('Announcements').orderBy("date", "asc").get();
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
            <div className="container-fluid p-2 bg-dark">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center right-bck p-4">
                        <div className="registration-right">
                            <h2>Announcements</h2>
                            <div className='event-list'>
                            <br></br>
                                {announcements.length > 0 && (
                                                <div className="card-body">
                                                        <Announcements announcements={announcements}/>
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
        </div>    
    )
}