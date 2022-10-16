function balance(input) {
    let index = 0;
    let n = input[index];
    let sum = 0;

    while (n !== "NoMoreMoney") {
        let current = Number(input[index]);
        index ++;
        if (current < 0) {
            console.log(`Invalid operation!`);
            break;
        } 
        sum += current;
        console.log(`Increase: ${current.toFixed(2)}`);
        
        n = input[index];
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
balance(["120",
"45.55",
"-150"])
