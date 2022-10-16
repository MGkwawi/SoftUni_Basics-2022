function foodDelivery(input) {
    let chickenPrice = 10.35;
    let fishPrice = 12.40;
    let vegeterianPrice = 8.15;
    let deliveryPrice = 2.50;

    let chickenMenus = Number(input[0] * chickenPrice);
    let fishMenus = Number(input[1] * fishPrice);
    let vegeterianMenus = Number(input[2]* vegeterianPrice);

    let allFood = chickenMenus + fishMenus + vegeterianMenus;
    let desert = allFood * 0.2;
    let allOrder = deliveryPrice + allFood + desert;

    console.log(allOrder);
}
foodDelivery(["2", "4", "3"]);