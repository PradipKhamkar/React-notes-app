import React from 'react'
import "./Header.css"

const Header = ({ handelToggleDarkMode }) => {

    return (
        <div className='header'>
            <h1>React Notes App</h1>
            <button className='save-btn toggleBtn' onClick={() => {
                handelToggleDarkMode((previewsDarkMode) => { return !previewsDarkMode }
                )
            }}>Toggle Mode</button>
        </div>
    )
}

export default Header