function sequence(input) {
    let n = Number(input[0]);
    let other = 1;

    while (n >= other) {
        
        console.log(other);
        other = other * 2 + 1;
    }
    
}
sequence(["17"])