// Holds all redis calls

function createUser(username, email) {
	const url = process.env.REACT_APP_API_URL;
	console.log(url);
	fetch(`${url}/api/redis/user/createUser`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username: username,
			email: email
		})
	})
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.error(err);
	})
	console.log("finished createUser");
}

export { createUser };
