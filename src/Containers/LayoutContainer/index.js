import React from 'react'
import { Outlet } from 'react-router-dom';


const LayoutContainer = () => {
    return (
        <>Layout
            <Outlet />
        </>
    )
}

export default LayoutContainer