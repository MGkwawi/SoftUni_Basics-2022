function maxNum(input) {
   let element = input[0];
   let index = 1;
   let max = Number.MIN_SAFE_INTEGER;
   
   while (element !== "Stop") {
       let current = Number(element);
       if (current > max) {
           max = current;
       }
       element = input[index];
       index ++;
   }
   console.log(max);
}
maxNum(["-1",
"-2",
"Stop"])
