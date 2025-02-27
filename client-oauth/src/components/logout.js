import { GoogleLogout } from 'react-google-login';

const clientId = '877237542058-q2b72ueg619a12ut6iaili3gpcnnh9ik.apps.googleusercontent.com';

function Logout() {

    const onSuccess = (res) => {
        console.log('Logout Success currentUser:', res.profileObj);
    }

    <div id='signOutButton'>
        <GoogleLogout
            clientId={clientId}
            buttonText='Logout'
            onLogoutSuccess={onSuccess}
        />

    </div>
}

export default Logout;  