var data = {
  "teams": [
    {
      "team_id": "bucket_makers",
      "team_name": "Bucket Makers",
      "games": [
        {
          "week": 1,
          "time": "2017-04-20T20:30+10:00",
          "opponent": "N/A",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 2,
          "time": "2017-04-27T22:10+10:00",
          "opponent": "N/A",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 3,
          "time": "2017-05-04T22:10+10:00",
          "opponent": "N/A",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 4,
          "time": "2017-05-11T00:00+10:00",
          "opponent": null,
          "result": {
            "home_score": null,
            "away_score": null
          }
        },
        {
          "week": 5,
          "time": "2017-05-18T22:10+10:00",
          "opponent": "The Truth",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 6,
          "time": "2017-06-01T21:20+10:00",
          "opponent": "Sth East Beasts",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 7,
          "time": "2017-06-01T20:30+10:00",
          "opponent": "INTREPID TRAVELLER",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 8,
          "time": "2017-06-15T19:40+10:00",
          "opponent": "YAO KNOW WHAT I MING",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 9,
          "time": "2017-06-15T18:50+10:00",
          "opponent": "realestate.com.au",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 10,
          "time": "2017-06-22T18:00+10:00",
          "opponent": "FOREVER",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 11,
          "time": "2017-06-29T18:00+10:00",
          "opponent": "EMERALD HOTEL BULLS",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 12,
          "time": "2017-07-06T18:50+10:00",
          "opponent": "VOORSCHT",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 13,
          "time": "2017-07-13T19:40+10:00",
          "opponent": "I S SLAMMERS",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 14,
          "time": "2017-07-20T20:30+10:00",
          "opponent": "VENTRICLES",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 15,
          "time": "2017-07-27T21:20+10:00",
          "opponent": "TORNADOES",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 16,
          "time": "2017-08-03T22:10+10:00",
          "opponent": "CITY BALLERS",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 17,
          "time": "2017-08-10T00:00+10:00",
          "opponent": null,
          "result": {
            "home_score": null,
            "away_score": null
          }
        },
        {
          "week": 18,
          "time": "2017-08-17T22:10+10:00",
          "opponent": "THE TRUTH",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 19,
          "time": "2017-08-24T21:20+10:00",
          "opponent": "STH EAST BEASTS",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 20,
          "time": "2017-08-31T20:30+10:00",
          "opponent": "INTREPID TRAVELLER",
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
      ]
    }
  ]
}


var games = document.querySelector('.games');

// Game builders
function Game(gameData) {
  var self = this;
  var gameDate = new Date(gameData.time);
  var datesFromNow = (gameDate.getTime() - (new Date()).getTime());
  console.log(datesFromNow);
  self.nextGame =  datesFromNow <= (60*60*24*7*1000) && datesFromNow > 0 ? true : false;
  console.log(self.nextGame);
  
  
  self.week = gameData.week;
  self.date = fecha.format(gameDate, 'dddd Do MMMM, YYYY');
  self.opponent = gameData.opponent;
  self.time = !self.opponent ? 'BYE' : fecha.format(gameDate, 'hh:mm A');
  
  self.element = (function(){
    var item = document.createElement('li'),
        week = document.createElement('p'),
        dateTime = document.createElement('p'),
        date = document.createElement('p'),
        time = document.createElement('p');
    // Assign Class
    item.className = self.nextGame ? 'game nexGame' : 'game';
    week.classList.add('week');
    dateTime.classList.add('gameTime');
    date.classList.add('date');
    time.classList.add('time');

    // Assign value
    week.innerHTML = 'Game ' + String(self.week) + (self.nextGame ? ' - Next Game' : '');
    date.innerHTML = self.date;
    time.innerHTML = self.time;
    // Append
    dateTime.appendChild(date);
    dateTime.appendChild(time);
    item.appendChild(week);
    item.appendChild(dateTime);
    
    return item;
  })();
}

data.teams[0].games.forEach(function(gameData, index){
  var gameItem = new Game(gameData);
  // console.log(gameItem);
  document.querySelector('.games').appendChild(gameItem.element);
});
