/**
 * Created by Administrator on 2016/6/11.
 */
angular.module("myapp").controller("strokeCtrl",function($scope,$ionicSideMenuDelegate){
    $scope.getNight =function(){
        $ionicSideMenuDelegate.toggleLeft();
    }

    $scope.activeIndex = 0;
    $scope.pagerClick = function(index){
        $scope.activeIndex = index
    }
})