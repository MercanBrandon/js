/* Variable */
//1.	Créer une constante avec la valeur 2;
//const a = 2 ;
//console.log('const :', a);

/*Arrow*/
//5.	Créer une fonction arrow qui prend en paramètre un nombre et retourne ce nombre multiplié
const multiple = (number) => console.log(number * 2);
multiple(20);

//7.	Créer une fonction arrow qui prend en paramètre un nombre avec une valeur par défaut à 10 et retourne ce nombre multiplié
const multiple2 = (number = 10) => console.log(number * 2);
multiple2();


/*Rest / Spread*/
//9.	Déclarer une fonction qui prends 3 paramètre, le troisième paramètre doit être un paramètre Rest.
const testRest = (a,b, ...c) => {
  let result = Number(a) + Number(b);
  for (var i = 0; i < c.length; i++) {
    result = Number(result) + Number(c[i]);
  }
  console.log('testRest() :', result);
};
testRest(1,2,3,4,5,6,7,8,9);

//10.	Maintenant au lieu de passer 1,2, 3, 4 en paramètre de votre fonction, créer un tableau contenant les valeurs [1, 2, 3, 4] et passer ces paramètres en mode spread.
const param = [1,2,3,4,5,6,7,8,9] ;
testRest(...param);

/*Templates String*/
//12.	Créer deux variables qui contiennent les valeurs “hello” et “world”, et maintenant concaténer ces valeurs avec le principe des templates String
const str1 = "Hello";
const str2 = "World";
const str3 = `${str1} ${str2}` ;
console.log('12.',str3);

//13.	Créer deux variables qui contiennent votre nom et prenom, et maintenant concatener ces valeurs avec le principe des templates String
const nom = 'Mercan';
const prenom = 'Brandon';
const ident = `Bonjour je suis ${nom} ${prenom}`
console.log('13.', ident);



const teamName = "tooling";
const people = [{name : "Jennie" , role:"senior" },
                {name :"Ronald" , role:"junior" },
                {name :"Martin" , role:"senior" },
                {name :"Anneli" , role:"junior" }];
let message = 'YOUR_CODE_HERE';
//15.	Maintenant créer plusieurs des templates strings qui doivent retourner les valeurs suivantes
let names = ''
for (var i = 0; i < people.length; i++) {
  names = names + people[i].name + ',';
}
let nbSeniors = 0
for (var i = 0; i < people.length; i++) {
  if (people[i].role = "senior") {
    nbSeniors++
  }
}
message = `There are ${people.length} people on the tooling team. Their name are ${names}.${nbSeniors} of them have senior role.`
console.log(message);


/*Objects properties*/
//16.	Créer une variable a contenant la valeur “hello world”; maintenant créer un objet avec pour nom “obj” et passer la variable a en mode “property shorthand”
const a = "Hello World";
let obj = {a};
console.log('16.',obj);

//17.	Créer une variable b contenant la valeur [1, 2, 3]; maintenant créer un objet avec pour nom “obj2” et passer la variable b en mode “property shorthand” dans cette objet
const b = [1,2,3];
const obj2 = {b};
console.log('17.', obj2);

//18.	Maintenant créer un objet “obj3” et passer la deux objets de la question 15 et 16 en mode “property shorthand”
const obj3 = {obj , obj2 };
console.log('18.',obj3);

//19.	Créer une variable a contenant la valeur “hello world”; maintenant créer un objet avec pour nom “objComputed” et par la suite le contenu de la variable a doit servir de clé dans objet objComputed.
let objComputed = {[a]: 'hitema'};
console.log('19', objComputed);

//20.	Maintenant, ajouter la fonction “maFunction” dans l’objet objComputed, en utilisant le principe de Enhanced Object Properties, Method Properties.
objComputed = {
  maFunction(){
    console.log('20.','vous êtes dans ma fonction');
  }
}
objComputed.maFunction();

//21.	Compléter le code ci-dessous afin d’avoir les résultats affichés en commentaire
var ids = {
  next : 0,
  get(){
    return this.next++;
  }
}
console.log('21.',ids.get());
console.log('21.',ids.get());

/*Destruction Assignment*/
var list = [1,2,3]

//22.	Créer deux variables a, b contenu dans un tableau en utilisant le principe d’assignement par destruction
let [a1,b1] = list;
console.log('22.a.',a1);
console.log('22.b.',b1);

var film = {
  'nomf': "Forest Gump",
  'annee': 1994,
  'duree' : "2h20min",
  'realisateur' : "Robert",
  'Like': 100806
};

//23.	Créer deux variables nom et annee, qui récupèrent les valeurs respectives du film ci-dessus utilisant le principe d’assignement par destruction
let {nomf,annee} = film;
console.log(nomf);
console.log(annee);

//24.	Créer une variable like, qui récupère la valeur Like du film ci-dessus utilisant le principe d’assignement par destruction et afficher à l’écran.
let like = {Like} = film.Like;
//let {like} = film.Like;
console.log('24.',like);

//26.	Créer une fonction qui prends 1 objet javascript, cette objet est détruit avec la variable a. Par la suite, exécuter cette fonction
const objet1 = {
  'cp': 97129,
  'ville': 'Lamentin'
}

function myFonction(UnObjet){
  let {cp} = UnObjet;
  console.log('26.',cp);
}
myFonction(objet1);

function myFonction2(UnObjet){
  let {cp,ville} = UnObjet;
  console.log('27.',cp,ville);
}
myFonction2(objet1);

/*Classes*/
//28.	Créer une classe vide et exécuter cette classe
class maClass {}
console.log(maClass);

//29.	Créer une classe contenant un constructeur qui prend le paramètres a, b, avec une méthode affiche
class maClass2 {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  affiche(){
    console.log('29.a',this.x);
    console.log('29.a',this.y);
  }
  multiple(){
    let z = Number(this.x) * Number(this.y);
    console.log('29.b',z);
  }
}
let uneVille = new maClass2(97131, 'Petit-Canal');
uneVille.affiche();
let multi = new maClass2(5,8);
multi.multiple();

//30.	Créer la classe et les méthodes qui doivent retourner cette valeur
class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  plus(p){
    return new Point(this.x + p.x , this.y + p.y);
  }
}
console.log(new Point(1,2).plus(new Point(2,1)));
