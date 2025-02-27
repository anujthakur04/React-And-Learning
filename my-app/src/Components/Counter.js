import React, { useState } from 'react'
import Counter1 from './Counter1'
import Counter2 from './Counter2'

function Counter() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const increaseCounter1 = () => {
        setCounter1(counter1 + 1);
    }

    const increaseCounter2 = () => {
        setCounter2(counter2 + 1);
    }
    return (
        <div className='container'>
            <div>
                <Counter1 value={counter1} onClick={increaseCounter1} />
            </div>
            <div>
                <Counter2 value={counter2} onClick={increaseCounter2} />
            </div>

        </div>
    )
}

export default Counter
