// syntax Hello World
/* ceci est un commenttaire pour une ligne
*/

// Number
// String
// Object
// Date
// Array

//String
var a;
a = "Hello World";
console.log(a);

var str = "hello";
var str2 = "World";
console.log("Test String :",  str + " " + str2);

// Number
var mon_nombre;
mon_nombre = 100;
var m2 = 100;
m2 += 10;
m2 -= 50;
m2 *= 2;
console.log("m2 :", m2);
console.log("Test Nombre : ", Number(mon_nombre) + Number(m2));

//booleen
var bool = true;
var boolneg = false;
console.log("Test Bool :", bool);


//array
var tab = [];
var tab2 = Array();
tab[0] = "s";
tab.push("d");

  //update
  tab[1] = "test";
  tab.unshift("debut");

newtab = tab.slice(0, 2);

console.log("Test Array", tab);
console.log("Test slice()", newtab);

//Objet
var obj = {};
obj.nom = "jean";
obj["Nom User"] = "Jean";
//delete obj.nom;

console.log("Objet :", obj);
