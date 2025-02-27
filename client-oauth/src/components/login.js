import { GoogleLogin } from 'react-google-login';

const clientId = '877237542058-q2b72ueg619a12ut6iaili3gpcnnh9ik.apps.googleusercontent.com';

function Login() {

    const onSuccess = (res) => {
        console.log('Login Success currentUser:', res.profileObj);
    }
    const onFailure = (res) => {
        console.log('Login Failed res:', res);
    }

    <div id='signInButton'>
        <GoogleLogin
            clientId={clientId}
            buttonText='Login with Google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
        />

    </div>
}

export default Login;