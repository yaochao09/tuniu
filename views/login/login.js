/**
 * Created by hxsd on 2016/6/8.
 */
angular.module("myapp").controller("loginCtrl",function($scope,$ionicSideMenuDelegate){
    $scope.getNight =function(){
        $ionicSideMenuDelegate.toggleLeft();
    }
})