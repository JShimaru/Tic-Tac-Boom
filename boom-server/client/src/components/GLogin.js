import {GoogleLogin} from 'react-google-login';
const clientId = "516771925707-jdvh0ot0jq4jmqsdnjgnp6ttb9hocsu1.apps.googleusercontent.com"


function GLogin(){

function onSuccess(res){
    console.log("Successful login! Current user: ", res.profileObj);
}

function onFailure(res){
    console.log("LOGIN FAILED! res: ", res);
}



    return(
        <div id='signInButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
        </div>
    )
}

export default GLogin