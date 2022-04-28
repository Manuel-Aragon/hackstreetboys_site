import React,{useState} from 'react'
import {fs} from '../../firebase-config'

export const AddAnnouncements = () => {

    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [date, setDate]=useState('');
    const [time, setTime]=useState('');
    
    const [successMsg, setSuccessMsg]=useState('');


    const handleAddEvents=(e)=>{
        e.preventDefault();
        // console.log(title, description, price);
        // console.log(image);
        fs.collection('Announcements').add({
                    title,
                    description,
                    date,
                    time
                }).then(()=>{
                    setSuccessMsg('Event added successfully');
                    setTitle('');
                    setDescription('');
                    setDate('');
                    setTime('');
                    document.getElementById('file').value='';
                    setTimeout(()=>{
                        setSuccessMsg('');
                    },3000)
                })
    }
  
    return (
        <div className='container'>
            <h1>Add Events</h1>
            <hr></hr>        
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>} 
            <form autoComplete="off" className='form-group' onSubmit={handleAddEvents}>
                <label>Announcement Title</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                <br></br>
                <label>Announcement Description</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setDescription(e.target.value)} value={description}></input>
                <br></br>
                <label>Announcement Date</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setDate(e.target.value)} value={date}></input>
                <br></br>
                <label>Announcement Time</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setTime(e.target.value)} value={time}></input>
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