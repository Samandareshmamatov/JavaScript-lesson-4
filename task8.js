let n = 35;
let k = 0;
while (true) {
    if (n < k ** 2) {
        break;
    }
    k++;
}
console.log(`Kvadrati ${n} dan katta bolmagan eng katta butun son : ` + (k - 1));