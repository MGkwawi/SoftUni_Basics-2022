function tradeCommissions(input) {
   let town = input[0];
   let sum = Number(input[1]);

    if (town === "Sofia") {
        if (0 <= sum && sum <=500){
            sum = sum * 0.05;
            console.log(sum.toFixed(2));
        } else if (500 < sum && sum <= 1000) {
            sum = sum * 0.07;
            console.log(sum.toFixed(2));
        } else if (1000 < sum && sum <= 10000) {
            sum = sum * 0.08;
            console.log(sum.toFixed(2));
        } else if (10000 < sum) {
            sum = sum * 0.12;
            console.log(sum.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (town === "Varna") {
        if (0 <= sum && sum <=500){
            sum = sum * 0.045;
            console.log(sum.toFixed(2));
        } else if (500 < sum && sum <= 1000) {
            sum = sum * 0.075;
            console.log(sum.toFixed(2));
        } else if (1000 < sum && sum <= 10000) {
            sum = sum * 0.1;
            console.log(sum.toFixed(2));
        } else if (10000 < sum) {
            sum = sum * 0.13;
            console.log(sum.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (town === "Plovdiv") {
        if (0 <= sum && sum <=500){
            sum = sum * 0.055;
            console.log(sum.toFixed(2));
        } else if (500 < sum && sum <= 1000) {
            sum = sum * 0.08;
            console.log(sum.toFixed(2));
        } else if (1000 < sum && sum <= 10000) {
            sum = sum * 0.12;
            console.log(sum.toFixed(2));
        } else if (10000 < sum) {
            sum = sum * 0.145;
            console.log(sum.toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error")
    }

}
tradeCommissions(["Kaspichan",
"-50"]);