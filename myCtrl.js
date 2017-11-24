app.controller('myCtrl',function($scope,$interval,$timeout){
    $scope.myname="john";
    var now = new Date();
    $scope.user_date=now;
    $scope.month=now.getMonth();
    $scope.currentTime = now.getFullYear() + '年' + now.getMonth() + '月' + now.getDate() + '日' + now.getHours() + '时' + now.getMinutes() + '分' + now.getSeconds() + '秒';           
    $interval(function () {
        var now = new Date();
        $scope.currentTime = now.getFullYear() + '年' + now.getMonth() + '月' + now.getDate() + '日' + now.getHours() + '时' + now.getMinutes() + '分' + now.getSeconds() + '秒';
    }, 1000);
    $scope.count=0;
    $scope.display=function(){
        $scope.flag=!$scope.flag ;
        $scope.myname=$scope.myname+$scope.radioVar;
        $scope.int=($scope.int+1)%2;  
        $scope.count++;       
    }
    $timeout(function(){
        $scope.myname="doe";
    },3000);
 }); 