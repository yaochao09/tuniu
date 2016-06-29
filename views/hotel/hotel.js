/**
 * Created by hxsd on 2016/6/6.
 */
angular.module("myapp").controller("hotelCtrl",function($scope,$http){
    $scope.page = 0; //当前页码数
    $scope.total = 1;//总页数
    $scope.restaurants=[]//储存餐饮的信息

    $scope.getRestaurants = function(){
        $scope.page++   //当前页码数加一
        var url = "views/hotel/hotel.json"
        $http.get(url).success(function(response){
            //便利返回的数据  找出每一个餐馆信息添加到$scope数组中
            angular.forEach(response.restaurants,function(restaurant){
                $scope.restaurants.push(restaurant)
            })

        $scope.total = response.totalPages ;//获得总页码数

            $scope.$broadcast("scroll.infiniteScrollComplete")
        }).error(function(err){
            $scope.$broadcast("scroll.infiniteScrollComplete")
            console.log(err)
        })

    }
    $scope.getRestaurants()  //加载时从APT第一页餐馆
})