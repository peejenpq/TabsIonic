angular.module('MySocial')

  .controller('cameraController',function ($scope,$cordovaCamera,$cordovaFileTransfer,$cordovaDialogs) {

    $scope.btnCamera = function(){
      console.log('btnCamera');

      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });
    };

    $scope.btnGallery = function(){
      console.log('btnGallery');
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });

    };

    $scope.btnUpload = function(){
      console.log('btnUpload');

      var img = document.getElementById('myImage');
      var imageURI = img.src;

      var server = "http://27.131.160.116:8080/upload/upload.php";
      var trustHosts = true;
      var options = {
        fileKey:"myCameraImg",
        fileName:imageURI.substr(imageURI.lastIndexOf('/')+1),
        mimeType:"image/jpeg",
        chunkedMode:false
      };

      $cordovaFileTransfer.upload(server, imageURI, options)
        .then(function(result) {

          $cordovaDialogs.alert('Upload Status', 'Complete', 'OK')
            .then(function() {
              img.src = '../img/camera_art.jpg';
            });


          // Success!
        }, function(err) {
          // Error
        }, function (progress) {
          // constant progress updates
        });
    }

  });
