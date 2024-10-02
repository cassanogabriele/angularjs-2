// Création d'une application Angular JS.
var myApp = angular.module("myApp", []);

// Création du contrôleur.
myApp.controller("myController", function($scope){
	// Création d'un tableau de films.
	$scope.newMovie = {};	
	// Création d'un tableau des films à modifier.
	$scope.clickedMovie = {};
	// Création d'une variable qui contiendra un message.
	$scope.message = "";
		
	// On crée quelques films.
	$scope.movies = [
		{	title: "Praesent tempus", 
			style: "Thriller",
			scenario:"Pellentesque non", 
			synopsis:"Sed sit amet dolor condimentum sapien facilisis accumsan.",
			year:"1991", 
			cast:"Curabitur leo, Vulputate dolor",
			duration:"1h58"
		},
		{	title: "Curabitur leo neque", 
			style: "Horreur",
			scenario:"Venenatis sed, Donec Vehicula", 
			synopsis:"Aenean in volutpat orci. Sed nibh metus, ornare eget eleifend ac, convallis vel sem.",
			year:"1974", 
			cast:"Venenatis sed, Donec Vehicula",
			duration:"1h24"
		},
		{	title: "Nunc quis velit lorem", 
			style: "Comédie",
			scenario:"Sed nibh", 
			synopsis:"Fusce in massa id odio volutpat condimentum sit amet ut magna.",
			year:"1980", 
			cast:"Sed nibh, Ut Et Felis",
			duration:"1h32"
		},
	];
	
	// Fonction qui sauve le nouveau film ajouté.
	$scope.saveMovie = function(){		
		$scope.movies.push($scope.newMovie);		
		$scope.newMovie = {};	
		$scope.message = "Nouveau film ajouté !";
	};
	
	// Fonction qui permet d'afficher les donnees du film sélectionné quand on veut le modifier.
	$scope.selectMovie = function(movie){
		$scope.clickedMovie = movie;
		console.log($scope.clickedMovie);
	};
	
	// Fonction qui affiche un message quand on a mis a jour un film.
	$scope.updateMovie = function(){
		$scope.message = "Film mis a jour avec succès !";
	};
	
	// Fonction qui permet de supprimer un film et qui affiche un message de confirmation de suppression du film.
	$scope.deleteMovie = function(){
		$scope.movies.splice($scope.movies.indexOf($scope.clickedUser), 1);
		$scope.message = "Utilisateur supprimé avec succès !";
	};
	
	// Permet de supprimer le message affiché dans un alert boostrap.
	$scope.clearMessage = function(){
		$scope.message = "";
	};
	
});