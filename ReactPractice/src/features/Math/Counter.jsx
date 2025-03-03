import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './mathSlice'
// import styles from './Counter.module.css'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <h2>{count}</h2>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;