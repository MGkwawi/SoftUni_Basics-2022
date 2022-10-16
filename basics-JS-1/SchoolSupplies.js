function schoolSupplies(input) {
    let penPrice = 5.80;
    let markerPrice = 7.20;
    let boardCleaningSprayPrice = 1.20;

    let pensAndPrice = Number(input[0] * penPrice);
    let markersAndPrice = Number(input[1] * markerPrice);
    let boardCleaningSprayAndPrice = Number(input[2] * boardCleaningSprayPrice);
    let discount = Number(input[3] / 100);

    let totalPrice = pensAndPrice + markersAndPrice + boardCleaningSprayAndPrice;
    let totalPriceWithDiscount = totalPrice - (totalPrice * discount);

    console.log(totalPriceWithDiscount);

}
schoolSupplies(["2", "3", "4", "25"]);