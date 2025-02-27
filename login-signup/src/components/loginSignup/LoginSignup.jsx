import React, { useContext, useState } from 'react'
import './LoginSignup.css'
import user_icon from '../assets/person.png'
import password_icon from '../assets/password.png'
import email_icon from '../assets/email.png'
import UserContext from '../context/UserContext'
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';


const LoginSignup = () => {
    const [action, setAction] = useState('Login');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ name, email })
        navigate('/Profile');
    }

    return (
        <div className='container poppins-bold '>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === 'Login' ? <div></div> : <div className='input'>

                    <img src={user_icon} alt="" />
                    <input
                        type="name"
                        placeholder='Enter your name'
                        autoComplete="off"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                </div>
                }

                <div className='input'>

                    <img src={email_icon} alt="" />
                    <input
                        type="email"
                        placeholder='Enter your email'
                        autoComplete="off"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                </div>

                <div className='input'>

                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder='Enter your password'
                        autoComplete="off"
                        name="password"
                    />
                    <button onClick={handleSubmit}>Submit</button>

                </div>
                <Profile />
            </div>
            <div>
                {action === 'Sign Up' ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
            </div>
            <div className="submit-container">
                <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => {
                    setAction("Sign Up");

                }}>Sign Up</div>

                <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => {
                    setAction("Login");

                }}>Login</div>
            </div>
        </div >
    )
}

export default LoginSignup
