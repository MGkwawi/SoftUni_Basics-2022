function skiTrip(input) {
    let days = Number(input[0]);
    let type  = input[1];
    let rating = input[2];

    let price = 0;
    switch (type) {
        case "room for one person":
            price = (days - 1) * 18;
            break;
        case "apartment":
            price = (days - 1) * 25;
            if (days < 10) {
                price = price * 0.7;
            } else if (days <= 15){
                price = price * 0.65;
            } else {
                price = price * 0.5
            }
            break;
        case "president apartment":
            price = (days - 1) * 35;
            if (days < 10) {
                price = price * 0.9;
            } else if (days <= 15) {
                price = price * 0.85;
            } else {
                price = price * 0.8;
            }
            break;
        }

    switch (rating) {
        case "positive":
            price = price * 1.25;
            break;
        case "negative":
            price = price * 0.9;
            break;
    }

    console.log(price.toFixed(2));
}
skiTrip(["30",
"president apartment",
"negative"]);