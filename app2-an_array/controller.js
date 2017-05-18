angular.module('arrayApp'). controller('arrayController', function($scope, mainService){
    $scope.getData = function(){
        $scope.employees = mainService.getData()
    }
    $scope.getData()
})