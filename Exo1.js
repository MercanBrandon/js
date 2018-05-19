/*Partie 1 - Fonctions basiques*/
//1.	Créer une fonction arrow qui affiche “hello World”

function arrow(){
  console.log("hello World");
}
arrow();

//2.	Créer une fonction qui prend un paramètre et exécuter cette fonction
function hello(name) {
  console.log("Hello " + name);
}

hello('Brandon');

//3.	Créer une fonction qui multiplie une valeur et retourne cette valeur multipliée
function multiple(number) {
  number *= 2;
  console.log(number);
}
multiple(3);


/*Partie 2 - Fonctions simples */
var film = {
  'nom' : "Forest Gump",
  'Annee' : 1994 ,
  'Duree' : "2h20min",
  'Realisateur' : "Robert",
  'Acteurs' : ['tom Hanks'],
  'Genres' : [],
  'Like': 100806,
  'prive': true
}

//4.	Créer une fonction qui retourne l’année d’un film
function filmName() {
  console.log(film.nom);
}
filmName();

//5.	Créer une fonction qui multiplie le nombre de like de 2
function likeMultiplier() {
  console.log("multiplie le nombre de like de 2 :", film.Like *= 2);
}
likeMultiplier();

//6.	Créer une fonction qui retourne true si l’année d’un film est supérieur à 2000
function testYear() {
  if (film.Annee > 2000) {
    console.log('testYear()',true);
  }
}
testYear();

//7.	Créer une fonction qui retourne true si le nombre de likes est supérieur à 1000
function testLike() {
  if (film.Like > 1000) {
    console.log('testLike()',true);
  }
}
testLike();

//8.	Créer une fonction qui ajoute un genre supplémentaire.
function addGenre(genre) {
  film.Genres.push(genre);
  console.log('addGenre()',film.Genres);
}
addGenre('humour');

/*Partie 3 - Fonctions avancées*/
var films = [{
  'nom' : "Forest Gump",
  'Annee' : 1994 ,
  'Duree' : "2h20min",
  'Realisateur' : "Robert",
  'Acteurs' : ['tom Hanks','CIC'],
  'Genres' : ['Comedie dramatique', 'Romance'],
  'Like': 100806,
  'prive': true
},
{
  'nom' : "Django",
  'Annee' : 2013,
  'Duree' : "2h44min",
  'Realisateur' : "Quentin Tarantino",
  'Acteurs' : ['Jamie Foxx', 'Christoph Waltz','CIC'],
  'Genres' : ['Western','Romance'],
  'Like' : 10030,
  'prive' : true
},
{
  'nom' : "TAXI5",
  'Annee' : 2018,
  'Duree' : "1h30min",
  'Realisateur' : "Luc Besson",
  'Acteurs' : ['Franck Gastambide','CIC'],
  'Genres' : ['humour','action'],
  'Like' : 100000,
  'prive' : true
}];

//9.	Créer une fonction qui retourne le nombre de like des films ci-dessus
function filmsNbLike() {
  for (var i = 0; i < films.length; i++) {
    console.log(films[i].nom+" "+films[i].Like);
  }
}
filmsNbLike()

//10.	Créer une fonction qui retourne la liste des genres disponibles
function aGenres() {
  var lGenres = [];
  for (var i = 0; i < films.length; i++) {
    lGenres.push(films[i].Genres);
  }
  console.log(lGenres);
}
aGenres();

//11.	Créer une fonction qui retourne les noms films privés
function privateFilm() {
  for (var i = 0; i < films.length; i++) {
    if (films[i].prive == true) {
      console.log('privateFilm() : ', films[i].nom);
    }
  }
}
privateFilm();

//12.	Créer une fonction qui retourne l’année du film le plus récent
function moreRecent() {
    for (var i = 0; i < films.length; i++) {
      Annee = films[0].Annee ;
      if (films[i].Annee > Annee){
        console.log(films[i].Annee);
      }
    }
}
moreRecent();

/*Partie 4 - Fonctions de recherche*/
//13.	Créer une fonction de recherche qui prend en paramètre un genre et doit retourner les nombres des films auquel ce genre est présent.
function filmsByGenres(Genre) {
  var nbFilm = 0;
  for (var i = 0; i < films.length; i++) {
    for (var y = 0; y < films[i].Genres.length; y++) {
      if (films[i].Genres[y] == Genre) {
        nbFilm = nbFilm + 1 ;
      }
    }
  }
    console.log('filmsByGenres() : ',nbFilm);
}
filmsByGenres('Romance');

//14.	Créer une fonction de recherche qui prend en paramètre un acteur et doit retourner les nombres des films auquel cet acteur est présent.
function filmsByActeurs(acteur) {
    var nbFilm = 0;
    for (var i = 0; i < films.length; i++) {
      for (var y = 0; y < films[i].Acteurs.length; y++) {
        if (films[i].Acteurs[y] == acteur) {
          nbFilm++;
        }
      }
    }
    console.log('filmsByActeurs :',nbFilm);
}
filmsByActeurs('CIC');

//15.	Créer une fonction de recherche qui prend en paramètre une année et doit retourner les nombres des films auquel l’année est supérieur.
function filmsByYear(annee) {
  var nbFilm = 0;
  for (var i = 0; i < films.length; i++) {
    if (films[i].Annee > annee) {
      nbFilm ++;
    }
  }
  console.log('filmsByYear() :', nbFilm);
}
filmsByYear(2000);
