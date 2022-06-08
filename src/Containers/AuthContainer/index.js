import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthContainer = () => {
    return (
        <>Auth
            <Outlet />
        </>
    )
}

export default AuthContainer