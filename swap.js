let x = 10;
let y = 20;

let temp = x;
x = y;
y = temp;
console.log("x:"+x+","+"y:"+y);

//swap by destructuring 
// [x, y] = [y, x];
// console.log("x:"+x+","+"y:"+y);