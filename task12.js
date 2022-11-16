let n = 25;
let k = 1;
let s = 0;
while (true) {
    s += k;
    if (s > n) {
        break;
    }
    k++;
}
console.log(`1 dan ${k-1} gacha bo'lgan sonlar yig'indisi : ${s-k} < ${n}`);
console.log(`Shartni qanoatlantiruvchi eng katta butun son : ${k-1}`);