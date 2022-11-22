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



// let num = [12, -4, 6, -47, 32, -8, -27, 54, 17, 31];
// let pos = [];
// let neg = [];
// let final = 0
// let final2 = 0
// num.forEach(val1 =>{
//         if(val1 > 0){
//             pos.push(val1)
//         }
//     });
//     pos.forEach(val2 =>{
//         final = final +val2
//     })
//     console.log(final);
   

//     num.forEach(val1 =>{
//         if(val1 < 0){
//             neg.push(val1)
//         }
//     });
//     neg.forEach(val2 => {
//         final2 = final2 + val2
//     })
//     console.log(final2);



// let array = [
//     [1, 2, 3],
//     [2, 3, 4],
//     [6, 3, 2]
//   ]
  
//    for (let i = 0; i < array.length; i++) {
//      alert(array[i][i])
//    }
    
  

// let matrix = [
//     [18, 2, 6],
//     [5, 1, 4],
//     [6, 3, 2],
//   ];
//   let max = 0;
//   matrix.forEach(function(array){
//    let max = Math.max(...array)
//     alert(max)
//   })



// let object = {
//     name : "Davit",
//      lastName: "Poghosyan",
//      age: 34,
//      country: "Armenia"
//    }
   
//    alert(Object.keys(object).length)



// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;

// for(let key in salaries){
//     sum += salaries[key];
// }

// alert(sum)

// let val =  (Object.values(salaries));


// let add = val.reduce((aggr, num) =>{
//     return aggr + num
// });
// console.log(add);



// let empty = {};

// empty.name = 'John';
// empty.surName = 'Smith';
// empty.name = 'Pete';
// delete empty.name;
// console.log(empty);


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };


// let sum = 0
// for(let key in salaries){
//     sum += salaries[key];
// }

// salaries.someChange = function(){
//     this.Ann = 180
//     }
//     salaries.someChange();
     


// let num = 0;
// for (key in salaries){
//     num++;
// }
// console.log(sum / num);



// let matrix = [
//         [18, 2, 6],
//         [5, 6, 4],
//         [6, 3, 2],
//       ];

//       let num = 0;
      
//       matrix.forEach(val =>{
//        num = val.reduce((el, el1) =>{
//         return el +el1
//        });
//        if (num % 2 == 0){
//         console.log(num);
//     }
//       })



// var myArray = ['one', 'two', 'three', 'four', 'five'];
// var rand = Math.floor(Math.random()*myArray.length);
// var rValue = myArray[rand];
// console.log(rValue),


// const numbers = [1, 2, 3, 4, 5, 6];
// const randomIndex = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне
// const result = numbers[randomIndex]; // извлекаем значение под случайным индексом
// console.log(result);




// let menu = {
//     width: 100,
//     height: 200,
//     title: "multiply"
// }

// function multi (){
//    return menu[key] * 2
// }

// for(key in menu) {
//     if(typeof menu[key] === 'number'){
        
//         console.log(multi());
//     }
    
// }

// let menu = {
//         width: 100,
//         height: 200,
//         title: "multiply"
//     };

//     let menu1 = {
//         width: 100,
//         height: 300,
//         title: "multiply"
//     };


//     let obj = Object.assign(menu, menu1)
//     console.log(obj);





// let obj = {
//     name: "name",
//     surname: "surname",
//     age: "age",
// }

// console.log(obj);




// let menu = {
//     width: 100,
//     height: 200,
//     title: "multiply"
// };


// let obj = Object.assign({}, menu)
// obj.width = 200;
// console.log(obj);














    

