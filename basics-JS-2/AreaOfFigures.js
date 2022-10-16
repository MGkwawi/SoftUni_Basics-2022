function areaOfFigures(input) {
    let shape = input[0];

    if (shape === "square") {
        let side = Number(input[1]);
        let area = side * side;
        console.log(area.toFixed(3));
    } else if (shape === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let area = sideA * sideB;
        console.log(area.toFixed(3));
    } else if (shape === "circle") {
        let radius = Number(input[1]);
        let area = radius * radius * Math.PI;
        console.log(area.toFixed(3));
    } else if (shape === "triangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let area = sideA * sideB / 2;
        console.log(area.toFixed(3));
    }
}
areaOfFigures(["circle",
"6"])




;