const express = require("express");

const app = express();
const cors = require("cors");
const redisClient = require("./redisConfig");
const port = 4000;

app.use(express.json());
// app.use(cors());
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST",
		allowedHeaders: "Content-Type,Authorization"
	})
);

// creates a user with username and email
app.post("/api/redis/user/createUser", (req, res) => {
	// expected to receive username and email
	const { username, email } = req.body;
	console.log("Received data: ", username, email);
	// res.json({"successful": true});
	try {
		redisClient.set(username, email).then((response) => {
			if (response === "OK") {
				res.json({
					"successful": true
				});
			}
		});
	} catch (error) {
		res.json({
			"successful": false
		});
	}
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
	console.log("redisClient: ", redisClient);
	redisClient.connect();
});
