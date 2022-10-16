function basketballExpenses(input) {
    let yearlyTraining = Number(input[0]);

    let shoes = yearlyTraining - (yearlyTraining * 0.4);
    let tracksuit = shoes - (shoes * 0.2);
    let ball = tracksuit * 0.25;
    let accessories = ball * 0.2;

    let totalCost = yearlyTraining + shoes + tracksuit + ball + accessories;
    console.log(totalCost);
}
basketballExpenses(["550"]);