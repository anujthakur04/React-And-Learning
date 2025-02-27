import React, { useCallback, useState } from 'react'
import Header from '../Components/Header'

function HookCallBack() {
    const [counter, setCounter] = useState(0)

    const newFn = useCallback(() => { }, [])

    return (
        <div>
            <Header newFn={newFn} />
            <h1>{counter}</h1>
            <button onClick={() => setCounter(prev => prev + 1)}>Click Here</button>
        </div>
    )
}

export default HookCallBack
