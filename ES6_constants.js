//variable
//ES5
// var a = 1 ;

//ES6
const a = 1;

let b = 1;
b=100;

console.log(a, b);

//ES6
const a0 = () => console.log("Hello");
const a1 = (b,c,d) => d * 2 + b + c ;

a1();

function f (a, b,...rest){
  console.log(a,b,rest);
}
f(1,2,3,4,5,6,7);

const a3 = ['gerard','test', '10'];

const a4 = 'hello';
const b4 = 'world';
const name = "brandon";

var c = 'je suis en cours et je vous dit ${a4} ${b4} et je suis ${name}';
