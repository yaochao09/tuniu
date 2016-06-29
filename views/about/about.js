/**
 * Created by hxsd on 2016/6/7.
 */
angular.module("myapp").controller("aboutCtrl",function($scope,$ionicSideMenuDelegate){
    $scope.getNight =function(){
        $ionicSideMenuDelegate.toggleLeft();
    }
})