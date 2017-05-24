function Game(e){var t=this,o=new Date(e.time),a=o.getTime()-(new Date).getTime();t.nextGame=6048e5>=a&&a>0,t.pastGame=0>=a,t.week=e.week,t.date=fecha.format(o,"dddd Do MMMM, YYYY"),t.opponent=e.opponent,t.time=t.opponent?fecha.format(o,"hh:mm A"):"BYE",t.element=function(){var e=document.createElement("li"),o=document.createElement("p"),a=document.createElement("p"),s=document.createElement("p"),n=document.createElement("p"),r="game";return t.nextGame?r+=" nexGame":t.pastGame&&(r+=" pastGame"),e.className=r,o.classList.add("week"),a.classList.add("gameTime"),s.classList.add("date"),n.classList.add("time"),o.innerHTML="Game "+String(t.week)+(t.nextGame?" - Next Game":""),s.innerHTML=t.date,n.innerHTML=t.time,a.appendChild(s),a.appendChild(n),e.appendChild(o),e.appendChild(a),e}()}!function(){function e(e){this.element=e}var t=function(e){return new RegExp("(^| )"+e+"( |$)")},o=function(e,t,o){for(var a=0;a<e.length;a++)t.call(o,e[a])};e.prototype={add:function(){o(arguments,function(e){this.contains(e)||(this.element.className+=this.element.className.length>0?" "+e:e)},this)},remove:function(){o(arguments,function(e){this.element.className=this.element.className.replace(t(e),"")},this)},toggle:function(e){return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)},contains:function(e){return t(e).test(this.element.className)},replace:function(e,t){this.remove(e),this.add(t)}},"classList"in Element.prototype||Object.defineProperty(Element.prototype,"classList",{get:function(){return new e(this)}}),window.DOMTokenList&&null==DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=e.prototype.replace)}();var teams=["Bucket Makers","City Ballers","realestate.com.au","Emerald Hotel Bulls","The Truth","Voorscht","Sth East Beasts","I S Slammers","Intrepid Traveller","Ventricles","Yao Know what I Ming"],data={teams:[{team_id:"bucket_makers",team_name:"Bucket Makers",games:[{week:1,time:"2017-04-20T20:30+10:00",opponent:"N/A",result:{home_score:"",away_score:""}},{week:2,time:"2017-04-27T22:10+10:00",opponent:"N/A",result:{home_score:"",away_score:""}},{week:3,time:"2017-05-04T22:10+10:00",opponent:"N/A",result:{home_score:"",away_score:""}},{week:4,time:"2017-05-11T00:00+10:00",opponent:null,result:{home_score:null,away_score:null}},{week:5,time:"2017-05-18T22:10+10:00",opponent:"The Truth",result:{home_score:"",away_score:""}},{week:6,time:"2017-05-25T18:50+10:00",opponent:teams[10],result:{home_score:"",away_score:""}},{week:7,time:"2017-06-01T18:50+10:00",opponent:teams[1],result:{home_score:"",away_score:""}},{week:8,time:"2017-06-15T19:40+10:00",opponent:teams[3],result:{home_score:"",away_score:""}},{week:9,time:"2017-06-15T20:30+10:00",opponent:teams[5],result:{home_score:"",away_score:""}},{week:10,time:"2017-06-22T21:20+10:00",opponent:teams[7],result:{home_score:"",away_score:""}},{week:11,time:"2017-06-29T22:10+10:00",opponent:teams[9],result:{home_score:"",away_score:""}},{week:12,time:"2017-07-06T00:00+10:00",opponent:null,result:{home_score:null,away_score:null}},{week:13,time:"2017-07-13T22:10+10:00",opponent:teams[2],result:{home_score:"",away_score:""}},{week:14,time:"2017-07-20T21:20+10:00",opponent:teams[4],result:{home_score:"",away_score:""}},{week:15,time:"2017-07-27T20:30+10:00",opponent:teams[6],result:{home_score:"",away_score:""}},{week:16,time:"2017-08-03T19:40+10:00",opponent:teams[8],result:{home_score:"",away_score:""}},{week:17,time:"2017-08-10T18:50+10:00",opponent:teams[10],result:{home_score:null,away_score:null}},{week:18,time:"2017-08-17T18:50+10:00",opponent:teams[1],result:{home_score:"",away_score:""}},{week:19,time:"2017-08-24T19:40+10:00",opponent:teams[3],result:{home_score:"",away_score:""}},{week:20,time:"2017-08-31T20:30+10:00",opponent:teams[5],result:{home_score:"",away_score:""}}]}]},games=document.querySelector(".games");data.teams[0].games.forEach(function(e,t){var o=new Game(e);document.querySelector(".games").appendChild(o.element)});var pastGames=Array.prototype.slice.call(document.querySelectorAll(".pastGame"));document.querySelector(".button--load").addEventListener("click",function(e){console.log("casd");var t=e.currentTarget;t.classList.toggle("active"),pastGames.forEach(function(e,t){e.classList.toggle("active")})});