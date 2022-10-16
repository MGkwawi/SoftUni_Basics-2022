function timePlusMinutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let hourToMins = hour * 60;
    let totalMins = hourToMins + minutes + 15;

    let resulfHour = Math.floor(totalMins / 60);
    let resultSecond = totalMins % 60;

    if (resulfHour > 23) {
        resulfHour = 0;
    }

    if (resultSecond < 10) {
        console.log(`${resulfHour}:0${resultSecond}`);
    } else {
        console.log(`${resulfHour}:${resultSecond}`);
    }

    
}
timePlusMinutes(["12", "49"]);