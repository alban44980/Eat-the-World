const db =  require('../Models/index.js');
const countriesFile = require('./countries.json')




const seedDB = async () => {
  const countries = countriesFile.features

  try {
    for (let country of countries) {
      let geometry = JSON.stringify(country.geometry)
      let properties = JSON.stringify(country.properties)
      country.properties = properties
      country.geometry = geometry

      await db.Country.create(country)
    }
  }
  catch (err) {
    console.log(err)
  }
}

seedDB()
.then(() => {
  process.exit()
})


