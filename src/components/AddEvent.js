import React,{useState} from 'react'
import {fs} from '../firebase-config'
import { Navbar } from './Navbar';

export const AddEvents = () => {

    const [city, setCity]=useState('');
    const [state, setState]=useState('');
    const [description, setDescription]=useState('');
    const [price, setPrice]=useState('');
    const [date, setDate]=useState('');
    const [location, setLocation]=useState('');
    
    const [successMsg, setSuccessMsg]=useState('');


    const handleAddEvents=(e)=>{
        e.preventDefault();
        // console.log(title, description, price);
        // console.log(image);
        fs.collection('Events').add({
                    city,
                    state,
                    description,
                    price: Number(price),
                    date,
                    location
                }).then(()=>{
                    setSuccessMsg('Event added successfully');
                    setCity('');
                    setState('');
                    setDescription('');
                    setPrice('');
                    setDate('');
                    setLocation('');
                    document.getElementById('file').value='';
                    setTimeout(()=>{
                        setSuccessMsg('');
                    },3000)
                })
    }
  
    return (
        <div className='container'>
            <Navbar/>
            <br></br>
            <br></br>
            <h1>Add Events</h1>
            <hr></hr>        
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>} 
            <form autoComplete="off" className='form-group' onSubmit={handleAddEvents}>
                <label>Event City</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setCity(e.target.value)} value={city}></input>
                <br></br>
                <label>Event State</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setState(e.target.value)} value={state}></input>
                <br></br>
                <label>Event Description</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setDescription(e.target.value)} value={description}></input>
                <br></br>
                <label>Event Price</label>
                <input type="number" className='form-control' required
                onChange={(e)=>setPrice(e.target.value)} value={price}></input>
                <br></br>
                <label>Event Date</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setDate(e.target.value)} value={date}></input>
                <br></br>
                <label>Event Location</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setLocation(e.target.value)} value={location}></input>
                <br></br>

                <br></br>           
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <button type="submit" className='btn btn-success btn-md'>
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    )
}