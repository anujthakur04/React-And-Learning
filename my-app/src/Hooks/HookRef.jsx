import React, { useEffect, useRef, useState } from 'react'

function HookRef() {
    const [counter, setCounter] = useState(0)
    const [add, setAdd] = useState(0)

    const cycle = useRef(0) // const cycle = {current : 0}

    useEffect(() => {
        cycle.current = cycle.current + 1
    })

    return (
        <div>
            <h2>Add : {add}</h2>
            <button onClick={() => setAdd(add + 1)}>+1</button>
            <h2>Count : {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <h1>Total render count: {cycle.current}</h1>
        </div>
    )
}

export default HookRef
