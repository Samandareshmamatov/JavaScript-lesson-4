let n = 6; // n < 20
let k = 1;
let s = 0;
while (true) {
    s += 1 / k;
    if (s >= n) {
        break;
    }
    k++;
}
console.log(`Shartni qanoatlantiruvchi eng kichik butun son : ${k}`);
console.log(`1 dan ${k} gacha bo'lgan sonlar yig'indisi : ${s} > ${n}`);