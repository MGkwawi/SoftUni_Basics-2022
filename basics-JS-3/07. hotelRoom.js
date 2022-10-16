function hotelRoom(input) {
    let month = input[0];
    let stay = Number(input[1]);

    let studio = 0;
    let apartment = 0;
    let price = 0;

    switch (month) {
        case "May":
        case "October":
            studio = 50 * stay;
            apartment = 65 * stay;
            if (stay > 7 && stay <= 14) {
                studio = studio * 0.95;
            } else if (stay > 14) {
                studio = studio * 0.7;
                apartment = apartment * 0.9;
            }
            break;
        case "June":
        case "September":
            studio = 75.2 * stay;
            apartment = 68.7 * stay; 
            if (stay > 14) {
                studio = studio * 0.8;
                apartment = apartment * 0.9;
            }
            break;
        case "July":
        case "August":
            studio = 76 * stay;
            apartment = 77 * stay;
            if (stay > 14) {
                apartment = apartment * 0.9;
            }
            break;
    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["August",
"20"]);