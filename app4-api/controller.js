angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc){
    $scope.getData  = function(){
        mainSvc.getData().then(function (response){
            $scope.display = response.data
        })
    }
    $scope.getData()
})