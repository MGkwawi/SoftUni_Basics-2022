function nimNum(input) {
    let element = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;

    while (element !== "Stop") {
        let current = Number(element);

        if (current < min) {
            min = current;
        }

        element = input[index];
        index ++;
    }

    console.log(min);
}
nimNum(["-10",
"20",
"-30",
"Stop"])
