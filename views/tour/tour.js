/**
 * Created by hxsd on 2016/6/7.
 */
angular.module("myapp").controller("tourCtrl",function($scope,$ionicSlideBoxDelegate){
    $scope.isShow = false;

    $scope.onSlideChanged = function(){
        if($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount()-1){
            $scope.isShow = true;
        }
    }
})