/**
 * Created by HuyKhanh on 21/09/2016.
 */
angular.module('myTaxiApp', [])
    .controller('PriceController', function($scope,$http) {
        var priceCtl = this;
        $scope.calc = function() {
            $http({
                url: 'http://localhost:3000/api/cost',
                method: "GET",
                params: {distance: $scope.distance}
            }).then(function(response) {
                $scope.cost=response.data.cost;
            });
        };
    });