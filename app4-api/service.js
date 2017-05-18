angular.module('apiApp').service('mainSvc', function($http){
    this.getData = function () {
        return $http.get('http://swapi.co/api/people/19/')
    }
})