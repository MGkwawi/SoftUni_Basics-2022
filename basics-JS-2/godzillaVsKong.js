function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothesForOne = Number(input[2]);

    let decoration = budget * 0.1;
    let clothesForAll = extras * clothesForOne;

    if (extras > 150) {
        clothesForAll = clothesForAll * 0.9;
    }

    let cost = decoration + clothesForAll;
    let diff = Math.abs(budget - cost);

    if (cost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else if (cost <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}
godzillaVsKong(["9587.88",
"222",
"55.68"])

;