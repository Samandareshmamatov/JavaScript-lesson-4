let number1 = 24;
let number2 = 3;
let i = 0;
let count = 1;
while (true) {
    number2 *= 3;
    count += 1;
    if (number1 == number2) {
        console.log(`${number1} 3 ning ${count} darajasi`);
        break;
    } else if (number1 < number2) {
        console.log(`${number1} 3 ning darajasi emas`);
        break;
    }
}