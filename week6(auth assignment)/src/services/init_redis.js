const redis = require('redis');



const client = redis.createClient({
    port: 6379,
    host: '127.0.0.1',
    username: "default",
    password: "waleed",
});

client.on('connect', () => console.log("client is connected to redis"));
client.on('ready', () => console.log("client ready to use"));

client.on('error', (error) => console.log(error.message));

client.on('end', () => console.log("client disconnected from redis"));
//we want to stop it when we press the ctrl+c. This is called sigint event

client.on("SIGINT", () => client.quit());
async function clientInit() {
    await client.connect();
}

module.exports = { client, clientInit };