function sum(input) {
    let index = 0;
    let sum = 0;
    let n = Number(input[index]);
    index ++;

    while (sum < n) {
        
        let current = Number(input[index]);
        index ++;
        sum += current;
    }

    console.log(sum);
}
sum(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

