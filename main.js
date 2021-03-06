/*
  Class List pollyfill
*/
// Source: https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
;(function() {
    // helpers
    var regExp = function(name) {
        return new RegExp('(^| )'+ name +'( |$)');
    };
    var forEach = function(list, fn, scope) {
        for (var i = 0; i < list.length; i++) {
            fn.call(scope, list[i]);
        }
    };

    // class list object with basic methods
    function ClassList(element) {
        this.element = element;
    }

    ClassList.prototype = {
        add: function() {
            forEach(arguments, function(name) {
                if (!this.contains(name)) {
                    this.element.className += this.element.className.length > 0 ? ' ' + name : name;
                }
            }, this);
        },
        remove: function() {
            forEach(arguments, function(name) {
                this.element.className =
                    this.element.className.replace(regExp(name), '');
            }, this);
        },
        toggle: function(name) {
            return this.contains(name) 
                ? (this.remove(name), false) : (this.add(name), true);
        },
        contains: function(name) {
            return regExp(name).test(this.element.className);
        },
        // bonus..
        replace: function(oldName, newName) {
            this.remove(oldName), this.add(newName);
        }
    };

    // IE8/9, Safari
    if (!('classList' in Element.prototype)) {
        Object.defineProperty(Element.prototype, 'classList', {
            get: function() {
                return new ClassList(this);
            }
        });
    }

    // replace() support for others
    if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
        DOMTokenList.prototype.replace = ClassList.prototype.replace;
    }
})();


var teams = [
  'Bucket Makers',
  'City Ballers',
  'realestate.com.au',
  'Emerald Hotel Bulls',
  'The Truth',
  'Voorscht',
  'Sth East Beasts',
  'I S Slammers',
  'Intrepid Traveller',
  'Ventricles',
  'Yao Know what I Ming'
]

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
          "time": "2017-05-25T18:50+10:00",
          "opponent": teams[10],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 7,
          "time": "2017-06-01T18:50+10:00",
          "opponent": teams[1],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 8,
          "time": "2017-06-08T19:40+10:00",
          "opponent": teams[3],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 9,
          "time": "2017-06-15T20:30+10:00",
          "opponent": teams[5],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 10,
          "time": "2017-06-22T21:20+10:00",
          "opponent": teams[7],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 11,
          "time": "2017-06-29T22:10+10:00",
          "opponent": teams[9],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 12,
          "time": "2017-07-06T00:00+10:00",
          "opponent": null,
          "result": {
            "home_score": null,
            "away_score": null
          }
        },
        {
          "week": 13,
          "time": "2017-07-13T22:10+10:00",
          "opponent": teams[2],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 14,
          "time": "2017-07-20T21:20+10:00",
          "opponent": teams[4],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 15,
          "time": "2017-07-27T20:30+10:00",
          "opponent": teams[6],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 16,
          "time": "2017-08-03T19:40+10:00",
          "opponent": teams[8],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 17,
          "time": "2017-08-10T18:50+10:00",
          "opponent": teams[10],
          "result": {
            "home_score": null,
            "away_score": null
          }
        },
        {
          "week": 18,
          "time": "2017-08-17T18:50+10:00",
          "opponent": teams[1],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 19,
          "time": "2017-08-24T19:40+10:00",
          "opponent": teams[3],
          "result": {
            "home_score": "",
            "away_score": ""
          }
        },
        {
          "week": 20,
          "time": "2017-08-31T20:30+10:00",
          "opponent": teams[5],
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
  // console.log(datesFromNow);
  self.nextGame = datesFromNow <= (60*60*24*7*1000) && datesFromNow > 0 ? true : false;
  self.pastGame = datesFromNow <= 0 ? true : false;
  self.week = gameData.week;
  self.date = fecha.format(gameDate, 'dddd Do MMMM, YYYY');
  self.opponent = gameData.opponent;
  self.time = !self.opponent ? 'BYE' : fecha.format(gameDate, 'hh:mm A');
  
  self.element = (function(){
    var item = document.createElement('li'),
        week = document.createElement('p'),
        dateTime = document.createElement('p'),
        date = document.createElement('p'),
        time = document.createElement('p'),
        gameClass = 'game';
    // Assign Class
    if( self.nextGame ) {
      gameClass += ' nexGame';
    } else if ( self.pastGame ) {
      gameClass += ' pastGame';
    }
    item.className = gameClass;
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

// Load the game and append
data.teams[0].games.forEach(function(gameData, index){
  var gameItem = new Game(gameData);
  // console.log(gameItem);
  document.querySelector('.games').appendChild(gameItem.element);
});

// Toggle button
var pastGames = Array.prototype.slice.call(document.querySelectorAll('.pastGame'));

document.querySelector('.button--load').addEventListener('click', function(event){
  console.log('casd');
  var self = event.currentTarget;
  // Toggle classes
  self.classList.toggle('active');
  pastGames.forEach(function(pastGame, index){
    pastGame.classList.toggle('active');
  });
});