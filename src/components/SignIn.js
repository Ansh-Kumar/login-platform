import { React } from "react";
import { getUserEmail } from "../services/redis";

function SignIn() {
	function handleSignIn() {
		console.log("SignIn clicked");
		getUserEmail("Ansh Kumar").then((response) => {
			if (response.successful) {
				if (response.email === null) {
					console.log("Email not found. Please create an account.");
				}
				else {
					console.log("email: ", response.email);
				}
			}
			else {
				console.log("Internal issue");
			}
		})
	}
	return <button onClick={handleSignIn}>SignIn</button>;
}

export default SignIn;
