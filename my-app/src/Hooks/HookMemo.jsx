import React, { useMemo, useState } from 'react'

function HookMemo() {
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)

    function numCube(num) {
        console.log("Calculation done!")
        return Math.pow(num, 3)
    }

    const result = useMemo(() => numCube(number), [number])
    return (
        <div>
            <input type='number' value={number} onChange={(e) => { setNumber(e.target.value) }} />
            <h1>Cube of number: {result}</h1>
            <button onClick={() => { setCounter(counter + 1) }}>Count++</button>
            <h1>Total number of counts {counter}</h1>
        </div>
    )
}

export default HookMemo
