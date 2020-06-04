import React from 'react';


function Header() {
    return(
        <header style={headerStyle}>
            <h1>To-Do Web App</h1>
        </header>
    )
    
}

const headerStyle ={
    background: 'black',
    color: 'white',
    padding: '10px'
}

export default Header;