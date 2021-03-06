import React,{useState, useEffect} from 'react'
import { Events } from './Events'
import {auth,fs} from '../../firebase-config'
import './event.css'
import { useNavigate } from 'react-router-dom'

export const EventPage = (props) => {
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
    const [events, setEvents]=useState([]);

    // getting events function
    const getevents = async ()=>{
        const events = await fs.collection('Events').orderBy("date","asc").get();
        const eventsArray = [];
        for (var snap of events.docs){
            var data = snap.data();
            data.ID = snap.id;
            eventsArray.push({
                ...data
            })
            if(eventsArray.length === events.docs.length){
                setEvents(eventsArray);
            }
        }
    }

    useEffect(()=>{
        getevents();
    },[])

    let Reservation;
    let navigate = useNavigate();
    const reserve = (event)=>{
        if(uid!==null){
            Reservation=event;
            Reservation['qty']=1;
            Reservation['TotalProductPrice']=Reservation.qty*Reservation.price;
            Reservation['countdownStart']=new Date().getTime();
            Reservation['countdownEnd']=Reservation.countdownStart + 1000*20;//timer = 20 seconds
            //Reservation['countdownEnd']=Reservation.countdownStart + 1000*60*5;//timer = 5 minutes
            fs.collection('Reservation ' + uid).doc(event.ID).set(Reservation).then(()=>{
                console.log('added to reservation page');
                console.log(Reservation.countdownStart);
            })
        }
        else{
            navigate('/login');
        }
    }

    return (  
            <div className='container-fluid bg-dark py-5'>
            {events.length > 0 && (
                <div className='events-box'>
                    
                    <Events events={events} reserve={reserve}/>
                </div>
            )}
            {events.length < 1 && (
                <div className='events-box'>
                            
                            Please wait....
                </div>
            )}
            </div>
    )
}