import React from 'react'
import useLocalStorage from './useLocalStorage'

const HookCustom = () => {
    const [name, setName] = useLocalStorage('username', '')
    return (
        <div>
            <input type="text" placeholder="Enter your text" value={name}
                onChange={(e) => { setName(e.target.value) }} />
            <h3>Hello, {name}!</h3>
        </div>
    )
}

export default HookCustom
