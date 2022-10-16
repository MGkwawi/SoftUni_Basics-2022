function shopping(input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let prossesors = Number(input[2]);
    let ramMemory = Number(input[3]);

    let videocardsCost = videocards * 250;
    let prossesorsCost = (videocardsCost * 0.35) * prossesors;
    let ramMemoryCost = (videocardsCost * 0.1) * ramMemory;

    let totalCost = videocardsCost + prossesorsCost + ramMemoryCost;

    if (videocards > prossesors) {
        totalCost = totalCost * 0.85;
    }

    let diff = Math.abs(budget - totalCost);

    if (budget >= totalCost) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else if (budget < totalCost) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }

}
shopping(["920.45",
"3",
"1",
"1"])
;
