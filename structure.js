var a = 5;
if((a >= 1) && (a <= 10)){
  console.log(true);
}

var b = ['test', 0, 2];

for (var i=0; i<a.length; i++) {
  console.log(b[i]);
}

for (let i of b){

}

var test = function(param1){
  console.log(param1);
  console.log(arguments);
}
test("test","hello",3000,"check");

// console.log('a-test');
// setTimeout(function(){
//   console.log('myTimeout');
// }, 1000);
// console.log('a-test2');

var a = {
  name: function(){
    return function(){
      console.log('test');
    }
  }
};

if (a && a.name) {
  a.name()();
}
