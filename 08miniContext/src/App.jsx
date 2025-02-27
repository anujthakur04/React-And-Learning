import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1> Anuj is great</h1>
      <Login />
    </UserContextProvider>
  )
}

export default App
