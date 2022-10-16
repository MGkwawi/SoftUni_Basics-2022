function conventor(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}
conventor(["22"]);

function conventorTwo(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}
conventorTwo(["100"]);

function conventorThree(input) {
    let oneUsdToBgn = 1.79549;
    let usd = Number(input[0]);
    let bgn = usd * oneUsdToBgn;
    console.log(bgn);
}
conventorThree(["12.5"]);