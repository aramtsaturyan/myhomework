let x = +prompt("")
let parz =[]
let baxadryal = []

for (let i = 2; i <= x; i++) {
let calc = 0;
for (let j = 2; j <= i; j++) {
if (i % j == 0) {
calc++;
}
}
if (calc == 1) {
parz.push(i)
}else{
    baxadryal.push(i)
}
}
    console.log(parz);
console.log(baxadryal);