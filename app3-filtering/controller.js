angular.module('app').controller('mainCtrl', function($scope, mainService) {
    $scope.display = mainService.getData()
})