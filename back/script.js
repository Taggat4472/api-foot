
const axios = require("axios");
const fs = require('fs')
const endpoint = "players/topassists"

const options = {
  method: 'GET',
  // Change url
  url: 'https://api-football-v1.p.rapidapi.com/v3/'+ endpoint,
  // Add or delete params
   params: {league: '39', season: '2022'},
  // Config header for rapidapi
  headers: {
    'X-RapidAPI-Key': 'f7065e94d7mshc5f447a939a46e0p125858jsn2d82e5b4afb6',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

// Requete http
axios.request(options).then(function (response) {
  // Response = la récupération des données de la requete http
	console.log(response.data);

    // Création du fichier (vous pouvez directement metttre le nom du fichier directement à la place de la date)
    fs.writeFile(`./json/${endpoint.replaceAll("/","-")}.json`, JSON.stringify(response.data, null, 2), function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });

// Si erreur
}).catch(function (error) {
	console.error(error);
});

// // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// const test = { name: "Bruno" } // Json Parse
// const str = `{"name":"Bruno"}` // Json stringify

// console.log(typeof test, test, typeof JSON.stringify(test), JSON.stringify(test))
// console.log(typeof str, str, typeof JSON.parse(str), JSON.parse(str))







