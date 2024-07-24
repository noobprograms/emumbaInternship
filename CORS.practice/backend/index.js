const express = require('express');
require('dotenv').config();
const cors = require('cors')
const app = express();
app.use(cors());
const jokes = [
    {
        "link": "https://www.reddit.com/r/Jokes/comments/33qli6/no_one_should_have_been_surprised_by_the_rise_of/",
        "score": 3889,
        "part1": "No one should have been surprised by the rise of the USSR after World War II.",
        "mature": false,
        "author": "Waltzer64",
        "part2": "I mean, there were red flags everywhere."
      },
      {
        "link": "https://www.reddit.com/r/Jokes/comments/3ullvl/photographers_are_so_violent/",
        "score": 3882,
        "part1": "Photographers are so violent.",
        "mature": false,
        "author": "bean9914",
        "part2": "They'll frame you, shoot you, blow you up and then hang you."
      },
      {
        "link": "https://www.reddit.com/r/Jokes/comments/42r97c/john_cena_woke_up_from_a_coma/",
        "score": 3874,
        "part1": "John Cena woke up from a coma",
        "mature": false,
        "author": "B4ItSkl8s",
        "part2": "John Cena: Where am I?  Nurse: ICU  John Cena: No you don't.  "
      },
]
app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/jokes',(req,res)=>{
    res.send(jokes);
})


app.listen(process.env.PORT || 5000, () => console.log("server is running!"));