function littersInFishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let persent = Number(input[3] / 100);

    let volume = lenght * width * hight;
    let volumeLitters = volume / 1000;
    let neededLitters = volumeLitters * (1 - persent);

    console.log(neededLitters);
}
littersInFishTank(["85", "75", "47", "17"]);