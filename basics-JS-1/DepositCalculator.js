function depositCalculator(input) {
    let deposit = Number(input[0]); 
    let months = Number(input[1]);
    let yearInterestPresent = Number(input[2]);

    let allInterest = deposit * (yearInterestPresent / 100);
    let monthlyInterest = allInterest / 12;
    let total = deposit + months * monthlyInterest;

    console.log(total);
}
depositCalculator(["200", "3", "5.7"]);