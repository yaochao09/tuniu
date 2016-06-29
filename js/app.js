/**
 * Created by hxsd on 2016/6/7.
 */
var myapp = angular.module("myapp",["ionic"]);

myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html",
        controller:"tourCtrl"
    })
    $stateProvider.state("spreads",{
        url:"/spreads",
        templateUrl:"views/spreads/spreads.html",
        controller:"spreadsCtrl"
    })
    $stateProvider.state("spreads.tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    })
    $stateProvider.state("spreads.information",{
        url:"/information",
        templateUrl:"views/information/information.html"
    })
    $stateProvider.state("spreads.about",{
        url:"/about",
        templateUrl:"views/about/about.html"
    })
    $stateProvider.state("spreads.settings",{
        url:"/settings",
        templateUrl:"views/settings/settings.html"
    })
    $stateProvider.state("spreads.airport",{
        url:"/airport",
        templateUrl:"views/airport/airport.html"
    })
    $stateProvider.state("spreads.hotel",{
        url:"/hotel",
        templateUrl:"views/hotel/hotel.html",
        controller:"hotelCtrl"
    })


    $stateProvider.state("spreads.tabs.home",{
        url:"/home",
        views:{"tab-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}}
    })
    $stateProvider.state("spreads.tabs.xiangXi",{
        url:"/xiangXi",
        views:{"tab-home":{templateUrl:"views/home/xiangxi.html",controller:"xiangxiCtrl"}}
    })

    $stateProvider.state("spreads.tabs.stroke",{
        url:"/stroke",
        views:{"tab-stroke":{templateUrl:"views/stroke/stroke.html",controller:"strokeCtrl"}}
    })

    
    $stateProvider.state("spreads.tabs.my",{
        url:"/my",
        views:{"tab-my":{templateUrl:"views/my/my.html"}}
    })

    $stateProvider.state("spreads.tabs.destination",{
        url:"/destination",
        views:{"tab-destination":{templateUrl:"views/destination/destination.html"}}
    })


    $stateProvider.state("spreads.login",{
        url:"/login",
        templateUrl:"views/login/login.html",controller:"loginCtrl"
    })
    $stateProvider.state("spreads.register",{
        url:"/register",
        templateUrl:"views/register/register.html"
    })
    $urlRouterProvider.otherwise("/tour")
})