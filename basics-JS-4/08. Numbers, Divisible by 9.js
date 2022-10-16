function divisionByNine(input) {
    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);
    let sum = 0;
    let outputNumbers = "";

    for (let i = numOne; i < numTwo; i ++) {
        if(i % 9 === 0) {
            sum += i;
            outputNumbers += `${i}\n`;
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(outputNumbers);
}
divisionByNine(["100", "200"]);