/**
 * Created by hxsd on 2016/6/8.
 */
angular.module("myapp").controller("spreadsCtrl",function($scope,$state){
    $state.go('spreads.tabs.home')
})