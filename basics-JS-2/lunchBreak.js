function lunchBreak(input) {
    let tvShow = input[0];
    let duration = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunch = breakTime / 8;
    let rest = breakTime / 4;
    let timeLeft = breakTime - lunch - rest;

    let diff = Math.abs(timeLeft - duration);

    if (duration <= timeLeft) {
        console.log(`You have enough time to watch ${tvShow} and left with ${Math.ceil(diff)} minutes free time.`);
    } else if (duration > timeLeft) {
        console.log(`You don't have enough time to watch ${tvShow}, you need ${Math.ceil(diff)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])
;