import React from 'react'
import { useState } from 'react'

function Hook1() {
    const [counter, setCounter] = useState({
        color: "red",
        size: "large"
    })

    function onChange() {
        setCounter({ ...counter, size: "Small", color: "black" })

    }
    return (
        <div>
            <h1>Counter is {counter.size} and has {counter.color} color</h1>
            <button onClick={onChange}>Make Changes</button>
        </div>
    )
}

export default Hook1

