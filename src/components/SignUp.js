import { React } from "react";
import { createUser } from "../services/redis";

function SignUp() {
	function handleSignUp() {
		console.log("Sign Up clicked");
		const result = createUser("AnshKumar", "ansh.khalasi@gmail.com");
		console.log(result);
	}

	return <button onClick={handleSignUp}>Sign Up</button>;
}

export default SignUp;
