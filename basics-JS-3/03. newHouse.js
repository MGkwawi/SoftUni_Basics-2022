function newHouse(input) {
    let type = input[0];
    let num = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;
    switch (type) {
        case "Roses":
            price = num * 5;
            if (num > 80) {
               price = price * 0.9; 
            }
            break;
        case "Dahlias":
            price = num * 3.8;
            if (num > 90) {
               price = price * 0.85; 
            }
            break;
        case "Tulips":
            price = num * 2.8;
            if (num > 80) {
               price = price * 0.85; 
            }
            break;
        case "Narcissus":
            price = num * 3;
            if (num < 120) {
               price = price * 1.15; 
            }
            break;
        case "Gladiolus":
            price = num * 2.5;
            if (num < 80) {
               price = price * 1.2; 
            }
            break;        
    }
    
    let diff = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${num} ${type} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}
newHouse(["Narcissus",
"119",
"360"]);