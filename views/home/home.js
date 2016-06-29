/**
 * Created by hxsd on 2016/6/7.
 */
angular.module("myapp").controller("homeCtrl",function($scope,$ionicSideMenuDelegate){
    $scope.message = "这是一个首页"
    $scope.getNight =function(){
        $ionicSideMenuDelegate.toggleLeft();
    }

    $scope.activeIndex = 0;
    $scope.pagerClick = function(index){
        $scope.activeIndex = index
    }
})