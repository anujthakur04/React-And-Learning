import React from 'react'
import SomeComponents from './Components/SomeComponents'
import Hook1 from './Hooks/Hook1'
import HookRef from './Hooks/HookRef'
import HookMemo from './Hooks/HookMemo'
import HookCallBack from './Hooks/HookCallBack'
import Profile from './Components/Profile'
import Footer from './Components/Footer'
import HookReducer from './Hooks/HookReducer'
import HookLayoutEffect from './Hooks/HookLayoutEffect'
import HookCustom from './Hooks/HookCustom'
import Counter from './Components/Counter'

function App() {
  return (
    <div className='App' style={{ textAlign: 'center' }}>
      {/* <h1>Let's understand lifecycle</h1> */}
      {/* <SomeComponents fage={50} /> */}
      {/* <Counter /> */}
      {/* <Hook1 /> */}
      {/* <HookRef /> */}
      {/* <HookMemo /> */}
      {/* <HookCallBack /> */}
      {/* <Profile /> */}
      {/* <Footer /> */}
      {/* <HookReducer /> */}
      {/* <HookLayoutEffect /> */}
      <HookCustom />
    </div>
  )
}

export default App
