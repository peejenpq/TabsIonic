angular.module('MySocial')

  .controller('loginCtrl',function ($scope,$http,$state) {
    console.log('Login Controller Start..');

    $scope.form = {};

    $scope.btnLogin = function () {
      if($scope.form.txt_usr == '1'){
        $state.go('tabs.plugin');
      }
      console.log($scope.form.txt_usr);
      console.log($scope.form.txt_pwd);
      console.log('Login Presssed');
      $http(
        {
          url:'http://27.131.160.116:8080/upload/login.php',
          method:'POST',
          data:{
            'var_username':$scope.form.txt_usr,
            'var_password':$scope.form.txt_pwd
          }
        }
      ).then(function (response) {
        console.log(response);
        console.log(response.data.results);
        if(response.data.results == 'success_login'){
          $state.go('tabs.plugin');
        }
      },function (error) {
      });
    }
  });
