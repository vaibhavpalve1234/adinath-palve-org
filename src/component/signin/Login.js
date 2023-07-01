import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';

function Login() {
    return (
        <div className='container'>
            <form className='card dropdown-menu p-4'>
                <div className='card-header text-center'>Login Pages</div>
                <div className='col-md-12 text-center'>
                    <label ><FaPhoneAlt /> PhoneNumber</label>
                    <input type="number" class="form-control " />
                    <label>OTP</label>
                    <input type="password" class="form-control" />
                </div>
                <div className='col-md-12 text-center'>
                    <button>Login!!</button>
                </div>
            </form>
        </div>
    )
}

export default Login