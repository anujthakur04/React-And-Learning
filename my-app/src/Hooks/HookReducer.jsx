// import React, { useReducer } from 'react'

// const HookReducer = () => {

//     const initialState = {
//         count: 0
//     }
//     function reducer(state, action) {
//         switch (action.type) {
//             case 'increase': {
//                 return { count: state.count + 1 }
//             }

//             case 'decrease': {
//                 return { count: state.count - 1 }
//             }
//         }
//     }
//     const [state, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <h1>The count is : {state.count}</h1>
//             <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
//             <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>

//         </div>
//     )
// }

// export default HookReducer





















import React, { useReducer } from "react";


const HookReducer = () => {
    let initialState = {
        count: 0
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'increase': {
                console.log('increase')
                return { count: state.count + 1 }
            }
            case 'decrease': {
                console.log('decrease')
                return { count: state.count - 1 }
            }
        }

    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: 'decrease' })}>decrease</button>
        </div>
    )
}

export default HookReducer;