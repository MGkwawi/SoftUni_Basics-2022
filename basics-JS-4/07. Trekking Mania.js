function trekking(input) {
    index = 0;
    let groups = Number(input[index]);
    index ++;

    let musala = 0;
    let monblan = 0;
    let kimimandjo = 0;
    let kTwo = 0;
    let everest = 0;

    for (let i = 1; i <= groups; i ++) {
        let people = Number(input[index]);
        index ++;
        if (people <= 5) {
            musala += people;
        } else if (people <= 12) {
            monblan += people;
        } else if (people <= 25) {
            kimimandjo += people;
        } else if (people <= 40) {
            kTwo += people;
        } else {
            everest += people;
        }
    }

    let allPeople = musala + monblan + kimimandjo + kTwo + everest;

    let musalaPersent = musala / allPeople * 100;
    let monblanPresent = monblan / allPeople * 100;
    let kimimandjoPresent = kimimandjo / allPeople * 100;
    let kTwoPresent = kTwo / allPeople * 100;
    let everestPresent = everest / allPeople * 100;

    console.log(`${musalaPersent.toFixed(2)}%`);
    console.log(`${monblanPresent.toFixed(2)}%`);
    console.log(`${kimimandjoPresent.toFixed(2)}%`);
    console.log(`${kTwoPresent.toFixed(2)}%`);
    console.log(`${everestPresent.toFixed(2)}%`);

}
trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
