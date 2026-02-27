import React from 'react'
import Navbar from '../components/Navbar/page.jsx'

function layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default layout
