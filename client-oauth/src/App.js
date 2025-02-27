import './App.css';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';


function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "877237542058-4tnuc5vtqfcrpftd50dlufgklk6mtvj3.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {
        theme: 'sqaure',
        size: 'large',
      }
    );
  }, []);

  google.accounts.id.prompt();
  return (
    <div className='App'>
      <div id='signInDiv'></div>
      {
        Object.keys(user).length !== 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>

      }

      {user &&
        <div>
          <img src={user.picture} />
          <h2> {user.name}</h2>
          <h3>{user.email}</h3>
        </div>
      }

    </div>
  );
}

export default App;
