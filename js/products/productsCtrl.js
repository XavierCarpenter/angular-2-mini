angular.module("myApp").controller("productsCtrl", function($scope, productsSrvc, $stateParams) {
  productsSrvc.getProduct($stateParams.id).then
  (response => {
      console.log("response: ", response);
      $scope.products = response});
});
