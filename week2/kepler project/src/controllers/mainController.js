const { parse } = require('csv-parse');
const fs = require("fs");
var results = [];

function isHabitable(potentialPlanet) {
    return potentialPlanet.koi_disposition === "CONFIRMED" &&
        potentialPlanet.koi_insol > 0.36 && potentialPlanet.koi_insol < 1.11 &&
        potentialPlanet.koi_prad < 1.6;
}



const getHabitable = (req, res) => {
    fs.createReadStream("./public/kepler_data.csv")
        .pipe(parse({ comment: "#", columns: true }))
        .on("data", (data) => {
            if (isHabitable(data)) {
                results.push(data);

            }

        }).on("error", (error) => console.log(error)).on("close", () => {
            console.log(results.map((elem) => elem.kepler_name));
            console.log('done')
            res.send(results.map((elem) => elem.kepler_name));
        });
}
module.exports = getHabitable;