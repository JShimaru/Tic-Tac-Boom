import { GoogleLogout } from "react-google-login";
const clientId="516771925707-jdvh0ot0jq4jmqsdnjgnp6ttb9hocsu1.apps.googleusercontent.com"

function GLogout(){
    
    const onSuccess = ()=>{
        console.log("Log out Successful!");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default GLogout;