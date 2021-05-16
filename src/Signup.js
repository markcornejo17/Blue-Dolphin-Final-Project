import React from 'react';
import { Link } from 'react-router-dom';


function Signup() {
    return (
        <form className="text-center" id="names"> 
                <div className="spaces"></div>
                <h2>Welcome</h2>
                <h1>Blue Dolphin Engagement</h1>
                <div classNmae="spaces"></div>
                <h3>Sign Up</h3>
            <form className="names">
                <div className="spaces"></div>
                <input type="text" placeholder="Department Name*" className="department-name"></input>
            </form>
                <div className="spaces"></div>
            <form>
                <input type="email" placeholder="Department Email*" className="email2"></input>
                <div className="spaces"></div>
                <input type="password" placeholder="Password*" className='password2'></input>
             </form>
             <div className="little-space"></div>
             <form>
                 <input type="checkbox" className="checkbox"></input>
                 <p className="checkbox2">I want to receive updates and promotions via email</p>
             </form>
             <div className="little-space"></div>
             <button type="submit" class="btn btn-secondary" id="button2">Sign Up</button>
             <div className="little-space"></div>
                <Link to="/login" style={{ textDecoration: 'none' }}>
             <p className="reminder">Already have an account? Log in</p>
             </Link>
        </form>
    )
}

export default Signup
