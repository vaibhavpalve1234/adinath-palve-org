import React from 'react'
import { FaUserAlt } from 'react-icons/fa';

function Login() {
    return (
        <form className='card'>
            <div className='card-header'>Login Pages</div>
            <div className='col-md-12 text-center'>
                <label ><FaUserAlt/> PhoneNumber</label>
                <input type="number" class="form-control" />
                <label>OTP</label>
                <input type="password" class="form-control" />
            </div>
            <div className='col-md-12 text-center'>
                <button>Login!!</button>
            </div>
        </form>

    )
}

export default Login