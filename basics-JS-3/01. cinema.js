function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let income = rows * columns;
    switch (type) {
        case "Premiere":
            income = income * 12;
            break;
        case "Normal":
            income = income * 7.5;
            break;
        case "Discount":
            income = income * 5;
            break;
    }

    console.log(`${income.toFixed(2)} leva`)
}
cinema(["Normal",
"21",
"13"]);
