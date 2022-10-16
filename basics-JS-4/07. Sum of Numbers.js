function sumNumbers(input) {
    let num = input[0]; // I should take it as a string. Otherwise there are no indexs.
    let sum = 0;

    for (let i = 0; i < num.length; i ++) {
        sum += Number(num[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumNumbers(["564891"]);
