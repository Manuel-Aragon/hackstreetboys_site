import React from 'react'
import background from '../img/backgroundhome.png'
import {useNavigate} from 'react-router-dom'
import './Home.css'


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
            {/* <section class="bg-primary text-light p-5">
        <div class="container">
          <div class="d-md-flex justify-content-between align-items-center">
            <h3 class="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
  
            <div class="input-group news-input">
              <input type="text" class="form-control" placeholder="Enter Email" />
              <button class="btn btn-dark btn-lg" type="button">Submit</button>
            </div>
          </div>
        </div>
            </section> */}
        </div>

    )
}

{/* <div>
<br></br>
<div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',
textAlign: 'center', position: 'fixed', minWidth: '100%', minHeight: '100%', opacity: '0.9'}}>
    <div style={{position: 'absolute', top: 400, left: 0, right: 0, bottom: 0}}>
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
</div> */}