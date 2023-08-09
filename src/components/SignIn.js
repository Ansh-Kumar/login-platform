import { React } from "react";

function SignIn() {
	function handleSignIn() {
		console.log("SignIn clicked");
	}
	return <button onClick={handleSignIn}>SignIn</button>;
}

export default SignIn;
