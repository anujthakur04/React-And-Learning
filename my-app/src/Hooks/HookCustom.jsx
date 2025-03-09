import React from 'react'
import useLocalStorage from './useLocalStorage'

const HookCustom = () => {
    const [name, setName] = useLocalStorage('username', '')
    return (
        <div>
            <input type="text" placeholder="Enter your text"
                onChange={(e) => { setName(e.target.value) }} />
            <h3>{name ? `Hello, ${name}!` : 'Hello'}</h3>
        </div>
    )
}

export default HookCustom
