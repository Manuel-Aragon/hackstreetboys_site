import React from 'react'
import background from '../img/backgroundhome.png'
import {useNavigate} from 'react-router-dom'



export const Home = () => {
    let navigate = useNavigate();

    const register = async () => {
        navigate('/Register');
    };

    return (
        <div>
            <br></br>
            <br></br>
            <div className = "background-image" style={{ 
                backgroundImage: `url(${background})`,
                width:'100%',
                height: '700px',
                minHeight: '100%', 
                opacity: '0.9'
            }}>
            <div style={{position: 'absolute', top: 300, left: 0, right: 0, bottom: 0}}>
                <div className="px-4 py-5  text-center">
                    <h1 className="display-1 fw-bold text-white">Hackstreet Boys on tour now!</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4 text-white">
                            Want tickets? Buy them today!
                        </p>
                        <li className='btn btn-secondary btn-md' onClick={register}>Register</li>
                    </div> 
                    
                </div>
            </div>
        </div>
        </div>

    )
}