import React from 'react'
import HeaderContainer from '../Header/HeaderContainer'

function PhotoCard(props) {
    return (

        <div>
            <div  style={{
                "display": "flex",
                'overflow': 'hidden',
                'justify-content': 'center',
                'align-items': 'center',
                'height': '100px',
                'background-color': '#f8f9fa',
                'margin-top': "90px",
            }}>

                <HeaderContainer />
            </div>
        </div>
    )
}

export default PhotoCard