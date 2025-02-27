import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import './LoginSignup.css'

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return <div> Please login</div>

    return <>

        <h1 className='welcome-name'>Welcome, {user.name}</h1>
        <h3 className='welcome-email'>Your email is : {user.email}</h3>
    </>
}

export default Profile