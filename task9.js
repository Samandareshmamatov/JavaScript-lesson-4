let n = 25;
let k = 1;
let s = 3;
while (true) {
    s *= 3;
    k++;
    if (s > n) {
        break;
    }
}
console.log(`Shartni qanoatlantiruvchi eng kichik butun son : ${k}`);