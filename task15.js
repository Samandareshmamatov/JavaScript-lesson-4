let money = 5000;
let m = 2 * money;
let p = 12; // 0 < p < 25
let month = 1;
while (true) {
    money *= (1 + p / 100);
    if (money > m) {
        break;
    }
    month++;
}
console.log(month + " oydan so'ng shart bajariladi");