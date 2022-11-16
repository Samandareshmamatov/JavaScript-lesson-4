let n = 54; // n != 0
let k = 55; // k != 0
let i = 1;
let q = 0;
let count = 0;

while (true) {
    n -= k;
    if (n < 0) {
        q = n + k;
        break;
    }
    count += 1;
}
console.log(`${n + (count+1)*k} / ${k} Butun qismi : ` + count);
console.log(`${n + (count+1)*k} / ${k} Qoldig'i : ` + q);