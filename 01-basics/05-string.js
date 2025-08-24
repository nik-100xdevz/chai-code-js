const name="nikhil"
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("bnoikhil")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newGameName = gameName.substring(0,4)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   nikhil@google.com     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nikhil-rai.xyz/nkhil%20rai"
console.log(url.replace('%20', '-'));