import React, { useEffect, useLayoutEffect } from 'react'

const HookLayoutEffect = () => {
    useEffect(() => {
        console.log("Message fron useEffect")
    }, [])

    useLayoutEffect(() => [
        console.log("Message from useLayoutEffect")
    ], [])
    return (
        <div>
            <h2>Text Message</h2>
            {Array(40000).fill('').map((item, index) => (
                <li key={index}>{Math.pow(Math.random(), 10)}</li>
            ))}
        </div>
    )
}

export default HookLayoutEffect
