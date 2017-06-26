angular.module('MySocial', ['ionic','ngCordova'])

.run(function($ionicPlatform,$ionicPopup) {

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider

      .state('login',{
        url:'/login',
        templateUrl:'templates/login.html',
        controller:'loginCtrl'
      })

      .state('tabs',{
        url:'/tabs',
        abstract:true,
        templateUrl:'templates/tabs.html'
      })

      .state('tabs.plugin',{
        url:'/plugin',
        views:{
          'view_plugin':{
            templateUrl:'templates/plugin.html',
            controller:'pluginController'
          }
        }
      })

      .state('tabs.camera',{
        url:'/camera',
        views:{
          'view_camera': {
            templateUrl: 'templates/camera.html',
            controller: 'cameraController'
          }
        }
      })
      .state('tabs.about',{
      url:'/about',
      views:{
        'view_about': {
          templateUrl: 'templates/about.html'
        }
      }
    });

    $urlRouterProvider.otherwise('/tabs/camera')

  });
