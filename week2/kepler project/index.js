//nasa has a list of the planets discovered by kepler satellite. Here we use parameters to find the habitable planets out of them using csv-parse


const { parse } = require('csv-parse');
const fs = require("fs");
var results = [];

function isHabitable(potentialPlanet) {
    return potentialPlanet.koi_disposition === "CONFIRMED" &&
        potentialPlanet.koi_insol > 0.36 && potentialPlanet.koi_insol < 1.11 &&
        potentialPlanet.koi_prad < 1.6;
}
fs.createReadStream("kepler_data.csv")
    .pipe(parse({ comment: "#", columns: true }))
    .on("data", (data) => {
        if (isHabitable(data)) {
            results.push(data);

        }

    }).on("error", (error) => console.log(error)).on("close", () => {
        console.log(results.map((elem) => elem.kepler_name));
        console.log('done')
    });