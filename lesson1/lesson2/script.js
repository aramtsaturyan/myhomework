
// function parz(x) {
//     if(x === 1){
//         console.log(false);
//     }else if(x === 2) {
//         console.log(true);
//     }else{
//         for(let i = 2; i < x; i++){
//             if (x % i === 0) {
//                return false
//             }
//         }
//         return true
//     }
// }
    
//     console.log(parz(49));



function perfect(x) {
    let val = 0
    for(i = 1; i < x; i++){
        if(x % i === 0){
            val = val + i;
        }
    }
        if(val === x){
            console.log(true);
        }else{
            console.log(false);
        }
    
}

console.log(perfect(6));