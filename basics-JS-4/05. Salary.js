function salary(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);
    let index = 0;
    let tabs = input[index];
    index ++;

    //COUNTS
    let facebook = 0;
    let instagram = 0;
    let reddit = 0;

    for (let i = 0; i <= n; i ++) {
        let currentTab = input[index];
        index ++; 
        if (currentTab === "Facebook") {
            facebook ++;
        } else if (currentTab === "Instagram") {
            instagram ++;
        } else if (currentTab === "Reddit") {
            reddit ++;
        }
    }

    let facebookLost = facebook * 150;
    let instagramLost = instagram * 100;
    let redditLost = reddit * 50;

    //total
    let total = facebookLost + instagramLost + redditLost;
    let diff = Math.abs(salary - total);

    if (total < salary) {
        console.log(diff);
    } else {
        console.log("You have lost your salary.");
    }


}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])


