const marvel_heroes = ["thor","ironman","spiderman"]

const dc_heroes = ["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes[3][1]);

//allheroes = marvel_heroes.concat(dc_heroes)
//console.log(allheroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]
//console.log(all_new_heroes);

const parray = [1, 2, 3, [4, 5, 6], 7,[ 8, 9, 0]]
const realparray = parray.flat(Infinity)
//console.log(realparray);




console.log(Array.isArray("madhu"))
console.log(Array.from("madhu"))
console.log(Array.from({name:"madhukar"})) //interestiing case
let score = 100
let score2 = 300
let score3 = 200
console.log(Array.of(score,score2, score3));
