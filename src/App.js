import { React } from "react";
// import logo from "./logo.svg";
import "./App.css";

// import components
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
	return (
		<div className="container">
			<div className="center">
				<SignIn />
				<SignUp />
			</div>
		</div>
	);
}

export default App;
