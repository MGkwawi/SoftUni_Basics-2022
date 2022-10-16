function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let dectination ;
    let stay ;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                dectination = "Bulgaria";
                stay = "Camp";
                budget = budget * 0.3;
            } else if (budget <= 1000) {
                dectination = "Balkans";
                stay = "Camp";
                budget = budget * 0.4;
            } else {
                dectination = "Europe";
                stay = "Hotel";
                budget = budget * 0.9;
            }
            break;
        case "winter":
            if (budget <= 100) {
                dectination = "Bulgaria";
                stay = "Hotel";
                budget = budget * 0.7;
            } else if (budget <= 1000) {
                dectination = "Balkans";
                stay = "Hotel";
                budget = budget * 0.8;
            } else {
                dectination = "Europe";
                stay = "Hotel";
                budget = budget * 0.9;
            }
            break;
    }
    console.log(`Somewhere in ${dectination}`);
    console.log(`${stay} - ${budget.toFixed(2)}`);
}
journey(["1500", "summer"]);