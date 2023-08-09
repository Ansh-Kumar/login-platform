const redis = require("redis");

const redisClient = redis.createClient({
	host: "chatbot-server",
	port: 6379
});

redisClient.on("error", (err) => {
	console.error("Redis Client Error");
});

module.exports = redisClient;
