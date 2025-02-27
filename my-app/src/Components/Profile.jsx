import React, { useContext } from 'react'
import Contact from './Contact'
import { AppContext } from '../Hooks/AppContext'


const Profile = () => {
    const { phone, name } = useContext(AppContext)
    return (
        <div>
            <h1>Profile</h1>
            <Contact />
            <h2>{name}'s phone number is {phone}</h2>
        </div>
    )
}

export default Profile
