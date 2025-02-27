import './App.css';
import LoginSignup from './components/loginSignup/LoginSignup.jsx';
import Profile from './components/loginSignup/Profile.jsx';
import { Routes, Route, Link } from "react-router-dom";
import UserContextProvider from './components/context/UserContextProvider';

function App() {
  return (

    <UserContextProvider>
      <div>
        <Routes>
          <Route path='/' element={<LoginSignup />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </UserContextProvider>

  );
}

export default App;
