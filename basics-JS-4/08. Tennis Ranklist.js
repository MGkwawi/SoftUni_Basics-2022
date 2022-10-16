function ranklist(input) {
index = 0;
let competitions = Number(input[index]);
index ++;
let startPoints = Number(input[index]);
index ++;


let points = 0;
let won = 0;


for (let i = 1; i <= competitions; i ++) {
    let currentRank = input[index];
    index ++;

    if (currentRank === "W") {
        points += 2000;
        won ++;
    } else if (currentRank === "F") {
        points += 1200;
    } else if (currentRank === "SF") {
        points += 720;
    }
}

let allPoints = startPoints + points;
console.log(`Final points: ${allPoints}`);

let averragePoints = Math.floor(points / competitions);
console.log(`Average points: ${averragePoints}`);

let wonCompetitionsPersent = won / competitions * 100;
console.log(`${wonCompetitionsPersent.toFixed(2)}%`);


}
ranklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

