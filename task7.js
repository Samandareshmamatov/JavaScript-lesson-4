let n = 35;
let k = 0;
while (true) {
    if (n < k ** 2) {
        break;
    }
    k++;
}
console.log(`Kvadrati ${n} dan katta bolgan eng kichik butun son : ` + k);