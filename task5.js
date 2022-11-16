let number1 = 32;
let number2 = 2;
let i = 0;
let count = 1;
while (true) {
    number2 *= 2;
    count += 1;
    if (number1 == number2) {
        console.log(`${number1} 2 ning ${count} darajasi`);
        break;
    } else if (number1 < number2) {
        console.log(`${number1} 2 ning darajasi emas`);
        break;
    }
}