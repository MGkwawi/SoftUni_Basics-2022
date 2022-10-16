function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let meters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let delay = Math.floor(meters/15) * 12.5;
    let time = meters * secondsPerMeter;

    let totalTime = time + delay;
    let diff = Math.abs(record - totalTime);

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else if (totalTime >= record) {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
;