import React from 'react';


function Header() {
    return(
        <header style={headerStyle}>
            <h1>GreenChoice To-Do App</h1>
        </header>
    )
    
}

const headerStyle ={
    background: 'darkgreen',
    color: 'white',
    padding: '10px'
}

export default Header;