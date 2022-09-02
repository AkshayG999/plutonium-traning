 
const axios = require("axios")

const getWeather = async function (req, res) {

    try {
        const options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=0c692b329aa712e2c48400c8ebab9a36`
        }
        const london = await axios(options)
        // weather report of london 
        console.log(london.data)
        const londonTemp = london.data.main.temp
        // tempreture of london 
        console.log(londonTemp)

        const cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        const cityTemp = []

        for (let i = 0; i < cities.length; i++) {
            const cityName = cities[i];
                const options = {
                    method: "get",
                    url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0c692b329aa712e2c48400c8ebab9a36`
                }
                const weather = await axios(options)
                cityTemp.push({ City: cityName, temp: weather.data.main.temp });
        }
        const sortedTemp = cityTemp.sort(function(a , b){
            return a.temp - b.temp
        })
        return res.status(200).send({ data: sortedTemp })
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
}
const createMeme = async function(req,res){
  try{
      const query = req.query;
      const options = {
          method: "post",
          url: `https://api.imgflip.com/caption_image`,
          params : query
      }
      const result = await axios(options)

      res.status(200).send({ data: result.data })
  }
  catch (err) {
      return res.status(500).send({error : err.message})
  }
}
module.exports.createMeme = createMeme
module.exports.getWeather = getWeather
