// let rectangle = [
//     {
//         length: 10,
//         width: 15
//     },
//     {
//         length: 13,
//         width: 3
//     },
//     {
//         length: 20,
//         width: 6
//     }
// ];




// rectangle.forEach(size => {
//     alert( size.length * size.width);
    
// });


// let val = [6, -8, 12, -6, 1, 5, -14];
// let sum = 0
// let i = 0
// val.forEach(num => {
//     if(num > 0){
//         sum = sum + num
//         i++;
//     }
// })

// console.log(sum / i);



// let num = [12, -4, 6, -47, 32, -8, -27, 54, 17, 31];
// let pos= num.filter(val1 =>{
//     return val1 > 0;
// });

// let posLast = pos.reduce((aggr, val) =>{
//     return aggr + val;
// })
// alert(posLast)

// let neg = num.filter(val2 =>{
//     return val2 < 0
// })

// let negLast = neg.reduce((aggr, val) =>{
//     return aggr + val;
// }, 0)
// alert(negLast)


// let i = 1
// function natural (x){
//     if(i > x) {
//         return;
//     }
//     console.log(i);
//     i++;
//     natural(x)
// }
// natural(50)
