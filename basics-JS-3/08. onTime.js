function onTime(input) {
    let hStart = Number(input[0]);
    let mStart = Number(input[1]);
    let hArrive = Number(input[2]);
    let mArrive = Number(input[3]);

    let startTime = hStart * 60 + mStart;
    let arriveTime = hArrive * 60 + mArrive;
    let diff = Math.abs(arriveTime - startTime);
    let h = Math.floor(diff/60);
    
    let m = diff % 60;
    if (startTime < arriveTime) {
        console.log("Late");
        if (diff >= 60) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            console.log(`${m} minutes after the start`);
        }
    } else if (arriveTime === startTime || startTime - arriveTime <= 30) {
        console.log("On time");
        if (diff > 0) {
            console.log(`${m} minutes before the start`);
        }
    } else if (startTime - 30 > arriveTime) {
        console.log("Early");
        if (h > 0) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        } else {
            console.log(`${m} minutes before the start`);
        }
    }

   
        
}
onTime(["9",
"00",
"3",
"03"]);