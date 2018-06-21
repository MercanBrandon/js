angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
      $scope.name = "test";
      $scope.target = "En cours";
      $scope.isExist = false;
      $scope.isRequired = false;
      $scope.newName = {};
      $scope.mode = 0;
      $scope.personneSelectionner = {};
      $scope.altPers = {};
      var age = 25;
      $scope.test = {
        age: age
      };

      $scope.people = [
        { name: "gerard" , age: 20},
        { name: "yanis", age: 30 }
      ];

      var testName = function(array, prop) {
        for (var i = 0; i < array.length; i++) {
          var personne = array[i]
          if (personne.name === prop) {
            return true;
          }
        }
        return false;
      }

      $scope.delPerson = function(index){
        $scope.people.splice(index, 1);
      }

      $scope.editPerson = function(index, personne){
        $scope.personneSelectionner = personne;
        $scope.altPers.name = personne.name;
        $scope.altPers.age = personne.age;
        $scope.mode = 1 ;
      }

      $scope.altPers = function() {
        $scope.people[$scope.personneSelectionner] = $scope.altPers;
      }

      $scope.addPerson = function() {
        var exists = testName($scope.people, $scope.newName.name);
        $scope.isExist = false;
        $scope.isRequired = false;
        if (!$scope.newName.name || !$scope.newName.age ) {
          $scope.isRequired = true;
          return
        }
        if (exists) {
          $scope.isExist = true;
          return
        }
        $scope.people.push($scope.newName);
        $scope.newName = {};
      }

      $scope.getMonAge = function() {
        $scope.test.age += 10;
      }
      $scope.resetAge = function() {
        $scope.test.age = age;
      }
  });


/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
