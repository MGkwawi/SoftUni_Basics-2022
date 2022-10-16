function bookReadingPlan(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let hoursNeeded = bookPages / pagesPerHour;
    let hoursPerDay = hoursNeeded / daysToRead;
    console.log(hoursPerDay);
}
bookReadingPlan(["212", "20", "2"]);