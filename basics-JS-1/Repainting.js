function repainting(input) {
    let nylonPrice = 1.50; //sq.meter
    let paintPrice = 14.50; //per litter
    let paintTinnerPrice = 5.00; //per litter
    let bagsPrice = 0.40;

    let nylonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let paintTinnerNeeded = Number(input[2]);
    let workHours = Number(input[3]);
    
    nylonNeeded = (nylonNeeded + 2) * nylonPrice;
    paintNeeded = (paintNeeded * 1.1) * paintPrice;
    paintTinnerNeeded = paintTinnerNeeded * paintTinnerPrice;
    

    let total = bagsPrice + nylonNeeded + paintNeeded + paintTinnerNeeded;
    let workersWage = (total * 0.3) * workHours;
    let priceForAll = total + workersWage;
    console.log(priceForAll);
}
repainting(["5", "10", "10", "1"]);