function graduation(input) {
    let name = input[0];
    
    let index = 1;

    let grade = 1;
    let sum = 0;
    let drop = 0;
    
    while (grade <= 12) {
        let current = Number(input[index]);
        index ++;
        if (current < 4) {
            drop ++;
            break;
        } else if (current >= 4) {
            grade ++;
            sum +=current;
        }
    }

    let average = sum / 12;

    if (drop >= 1) {
        console.log(`${name} has been excluded at ${grade} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
