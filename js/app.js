const team = {
  borussia: "Borussia Dortmund",
  logo: "img/logo4.jpg",
  players: [
  {
    img: "img/Roman-Burki.png",
    name: "Roman",
    lastName: "Burki",
    number: 1,
    position: "Goalkeeper",
    age: 29
  },
  {
    img: "img/paco-alcacer.png",
    name: "Paco",
    lastName: "Alcacer",
    number: 9,
    position: "Attacker",
    age: 27
  },
  {
    img: "img/mats-hummels.png",
    name: "Mats",
    lastName: "Hummels",
    number: 15,
    position: "Defender",
    age: 31
  },
  {
    img: "img/marcel-schmelzer.png",
    name: "Marcel",
    lastName: "Schmelzer",
    number: 29,
    position: "Defender",
    age: 32
  },
  {
    img: "img/nico-schulz.png",
    name: "Nico",
    lastName: "Schulz",
    number: 14,
    position: "Defender",
    age: 27
  },
  {
    img: "img/lukasz-piszczek.png",
    name: "Lukasz",
    lastName: "Piszczek",
    number: 26,
    position: "Defender",
    age: 35
  },
  {
   img: "img/thomas-delaney.png",
   name: "Thomas",
   lastName: "Delaney",
   number: 6,
   position: "Midfielder",
   age: 28
 },
 {
  img: "img/julian-brandt.png",
  name: "Julian",
  lastName: "Brandt",
  number: 19,
  position: "Midfielder",
  age: 24
},
{
  img: "img/marco-reus.png",
  name: "Marco",
  lastName: "Reus",
  number: 11,
  position: "Attacker",
  age: 30
},
{
  img: "img/marwin-hitz.png",
  name: "Marwin",
  lastName: "Hitz",
  number: 35,
  position: "Goalkeeper",
  age: 29
},
{
  img: "img/jadon-sancho.png",
  name: "Jadon",
  lastName: "Sancho",
  number: 7,
  position: "Attacker",
  age: 20
},
{
  img: "img/jacob-bruun-larsen.png",
  name: "Jacob",
  lastName: "Bruun-Larsen",
  number: 34,
  position: "Attacker",
  age: 29
},
{
  img: "img/tobias-raschl.png",
  name: "Tobias",
  lastName: "Raschl",
  number: 37,
  position: "Midfielder",
  age: 19
},
{
  img: "img/erling-haaland.png",
  name: "Erling",
  lastName: "Haaland",
  number: 17,
  position: "Attacker",
  age: 20
},
{
  img: "img/erling-haaland.png",
  name: "Erling",
  lastName: "Haaland",
  number: 17,
  position: "Attacker",
  age: 20
}
]
};

const arrPlayers = team.players;

// FUNCTION FOR CHANGING THEM PLAYERS

const change = arr => {

  let indexCur = arr.length,
  temporaryValue,
  randomIndex;

  while (0 !== indexCur) {

    randomIndex = Math.floor(Math.random() * indexCur);
    indexCur -= 1;

    temporaryValue = arr[indexCur];
    arr[indexCur] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};

change(arrPlayers);

// FUNCTION FOR CREATING AND ADDING ELEMENTS

const firstTeam = 11;
const substitutions = 4;
const { borussia, logo } = team;

const createElements = () => {
  
  let createLogo = document.createElement("img");
  createLogo.setAttribute("src", logo);
  let header = document.querySelector("header");
  header.appendChild(createLogo);

  let main = document.createElement("div");
  main.setAttribute("id", "main");
  const body = document.querySelector("body");
  body.appendChild(main);

  let title = document.createElement("h1");
  title.innerHTML = borussia;
  header.after(title);

  let players = document.createElement("div");
  players.setAttribute("id", "players");
  main.appendChild(players);

  let subs = document.createElement("div");
  subs.setAttribute("id", "subs");
  main.appendChild(subs);

  let subsTitle = document.createElement("h2");
  subsTitle.innerHTML = "Substitutes";
  players.after(subsTitle);
};

// FUNCTION FOR ADDING PLAYERS AND CREATING ELEMENTS

const addPlayers = () => {
  for (let i = 0; i < firstTeam + substitutions; i++) {
    if (i < firstTeam) {
      var parentDiv = players;
    } else {
      var parentDiv = subs;
    }

    let player = document.createElement("div");
    player.classList.add("player");
    parentDiv.appendChild(player);

    let playerImg = document.createElement("img");
    playerImg.setAttribute("src", team.players[i].img);
    player.appendChild(playerImg);

    let playerName = document.createElement("h4");
    playerName.innerHTML = team.players[i].name;
    player.appendChild(playerName);

    let playerLastName = document.createElement("h3");
    playerLastName.innerHTML = team.players[i].lastName;
    player.appendChild(playerLastName);

    let playerPosition = document.createElement("h4");
    playerPosition.innerHTML = team.players[i].position;
    player.appendChild(playerPosition);

    let playerNum = document.createElement("p");
    playerNum.innerHTML = team.players[i].number;
    player.appendChild(playerNum);
  }
};

// FUNCTION FOR GETTING A RANDOM NUMBER FROM ARRAY
const getRandomNum = arr => Math.floor(Math.random() * arr.length);

createElements();

addPlayers();

// FUNCTION FOR RANDOM SUBS

setInterval(() => {
  let startingTeam = document.querySelectorAll("#players .player");
  let subs = document.querySelectorAll("#subs .player");

  let startingTeamNumber = getRandomNum(startingTeam);
  let subsNum = getRandomNum(subs);

  let startingTeamPlayer = startingTeam[startingTeamNumber];
  let subsPlayer = subs[subsNum];

  let subPrevious = subsPlayer.previousSibling;
  let subNext = subsPlayer.nextSibling;

  startingTeamPlayer.after(subsPlayer);

  subPrevious
  ? subPrevious.after(startingTeamPlayer)
  : subNext.before(startingTeamPlayer);
}, 5000);