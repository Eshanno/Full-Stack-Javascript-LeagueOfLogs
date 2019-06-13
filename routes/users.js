var express = require('express');
var router = express.Router();
const request = require('request-promise')
const ApiKey = 'RGAPI-afaf6533-df34-4859-b3d5-77761ca5a9d5'



/* GET users listing. */


router.get('/:summonerName', function(req, res, next) {

  getSummonerByName(req.params.summonerName)
  .then(response => {return res.json(response)})
  .catch(err => console.log(err))

})

router.get('/:summonerName/matches', function(req, res, next) {
  getSummonerByName(req.params.summonerName)
  .then(summonerJson => getMatchHistory(summonerJson.accountId))
  .then(response => response.matches)
  .then(matches => matches.map(match => getMatchDetails(match.gameId)))
  .then(detailedMatchePromises => Promise.all(detailedMatchePromises)
  .then(detailedMatchHistory => res.json(detailedMatchHistory)))
  .catch(err => console.log(err))

//res.json(response)
})


module.exports = router;


const getSummonerByName = (summonerName)=>{

  const options = {
      url: 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+summonerName,
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8',
          'User-Agent': 'leagueOfLogsServer',
          'X-Riot-Token': ApiKey

        },
        json:true
    }
    return request(options)
    .then(response => response)
    .catch(err=>{console.log(err)})
}

const getMatchHistory = (encrpytedAccountId) =>{
  const options = {
      url: 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/'+encrpytedAccountId + '?endIndex=10',
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8',
          'User-Agent': 'leagueOfLogsServer',
          'X-Riot-Token': ApiKey

        },
        json:true
    }
  return request(options).then(response=>response).catch(err=>{console.log(err)})
}

const getMatchDetails = (gameId) => {
  const options = {
      url: 'https://na1.api.riotgames.com/lol/match/v4/matches/' + gameId,
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8',
          'User-Agent': 'leagueOfLogsServer',
          'X-Riot-Token': ApiKey

        },
        json:true
    }
    return request(options).then(response=>response).catch(err=>{console.log(err)})

}
