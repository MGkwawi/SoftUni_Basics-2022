function toyShop(input) {
    let trip = Number(input[0]);
    let p = Number(input[1]);
    let d = Number(input[2]);
    let b = Number(input[3]);
    let m = Number(input[4]);
    let t = Number(input[5]);

    let numberOfToys = p + d + b + m + t;
    let totalPrice = p * 2.60 + d * 3 + b * 4.10 + m * 8.20 + t * 2;
    
    if (numberOfToys >= 50) {
        totalPrice = totalPrice * 0.75;
    }

    totalPrice = totalPrice * 0.9; 
    let diff = Math.abs(totalPrice - trip);
    
    if (totalPrice >= trip) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
    
    
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])
;