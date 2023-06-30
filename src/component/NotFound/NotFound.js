import React from 'react'
import HeaderContainer from '../Header/HeaderContainer'
import logo from '../../images/NotFound.png'

function NotFound() {
    return (
        <div>
            <HeaderContainer />
            <br />
            <div className='container'>
                <img src={logo} style={{ 'width': '100%', "mix-blend-mode": "darken" }} alt='Not found' />
                <p className='text-center'> 404 - NotFound </p>
            </div>
        </div>
    )
}

export default NotFound