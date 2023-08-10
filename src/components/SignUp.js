import { React } from "react";
import { createUser } from "../services/redis";

function SignUp() {
	function handleSignUp() {
		console.log("Sign Up clicked");
		createUser("AnshKumar", "ansh.khalasi@gmail.com")
		.then((response) => {
			if (response === true) {
				console.log("Successfully signed up!");
			}
		});
	}
	return <button onClick={handleSignUp}>Sign Up</button>;
}

export default SignUp;
