const EventEmitter = require('events');
const celebrity = new EventEmitter();


//observer 1 subscribing to the instagram posts of celebrity

celebrity.on("post", (result) => result === "instagram" ? console.log("go check out his picture on instagram") : null);


//observer 2 subscribing to the youtube videos from the celebrity

celebrity.on("post", (result) => result === "youtube" ? console.log("go check out his video on youtube") : null);



celebrity.emit("post", "instagram"); //callbacks will run based on an event driven approach
celebrity.emit("post", "youtube");



//we can try this event driven approach in the process module as well as given below



process.on("exit", (code) => console.log("process exitted with exit code ", code))