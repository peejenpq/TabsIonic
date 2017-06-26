angular.module('MySocial')

  .controller('pluginController',function ($scope,$state,$cordovaVibration,$cordovaDialogs) {

    $scope.btnCamera = function () {
      console.log('btnCamera');
      $state.go('tabs.camera')
    };

    $scope.btnAlert = function(){
      console.log('btnAlert');
      $cordovaDialogs.alert('Haloha', 'Hey!', 'button Haloha')
        .then(function() {
          // callback success
        });
    };

    $scope.btnConfirm = function(){
      console.log('btnConfirm');
      $cordovaDialogs.confirm('Yeah yeah', 'HAHAHA', ['OK','Cancel'])
        .then(function(buttonIndex) {
          // no button = 0, 'OK' = 1, 'Cancel' = 2
          var btnIndex = buttonIndex;
        });
    };

    $scope.btnVibrate = function(){
      console.log('btnVibrate');
      $cordovaVibration.vibrate(100);
    };

    $scope.btnBeep = function(){
      console.log('btnBeep');
      $cordovaDialogs.beep(3);
    };
  });
