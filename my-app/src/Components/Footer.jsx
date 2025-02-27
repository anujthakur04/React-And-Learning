import React, { useContext } from 'react'
import { AppContext } from '../Hooks/AppContext'

const Footer = () => {
    const { phone, name: fname } = useContext(AppContext)
    return (
        <div>
            <h1>Footer</h1>
            <h2>{fname}'s phone number is {phone}</h2>
        </div>
    )
}

export default Footer
