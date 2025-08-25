const marvel_heros = ["spiderman", "thor", "ironman",]
const dc_heros = ["superman", "flash", "batman",]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros.length);

// const newArray = marvel_heros.concat(dc_heros)

// console.log(newArray);


// const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

const anotherArray = [1,2,3,4,[4,5,6],7,[1,2,3,[4,5]]]

const my_another_Array =anotherArray.flat(Infinity)

console.log(my_another_Array);



console.log(Array.isArray("nikhil"));
console.log(Array.from("nikhil")); 
console.log(Array.from({name:"nikhil"})); 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2 , score3));