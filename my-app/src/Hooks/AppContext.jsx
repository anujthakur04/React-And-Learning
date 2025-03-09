// import React, { createContext } from 'react'

// export const AppContext = createContext()

// const ContextProvider = (props) => {
//     const phone = "+91 8130610133"
//     const name = "Anuj"
//     return (
//         <AppContext.Provider value={{ phone, name }}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }

// export default ContextProvider


















import react, { createContext } from 'react'

export const AppContext = createContext()

const ContextProvider = (props) => {
    const name = 'Anuj'
    const phone = '+91 813-610133'

    return (
        <AppContext.Provider value={{ name, phone }} >
            {props.children}
        </AppContext.Provider>

    )
}

export default ContextProvider