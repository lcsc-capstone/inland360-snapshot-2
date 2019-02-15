import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InAppBrowser, InAppBrowserObject} from '@ionic-native/in-app-browser/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
myPhoto:any;
link = "https://inland360.com/events/#/event/7608762-the-favourite?location=83501-lewiston&sections=all&date=today";

  constructor(public navCtrl: NavController, private camera: Camera, private photoLibrary: PhotoLibrary, private sanitizer: DomSanitizer) { }
takePhoto()
{
  const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
  saveToPhotoAlbum:true
  }
  this.camera.getPicture(options).then(imageUri => {
    this.myPhoto = this.sanitizer.bypassSecurityTrustUrl(imageUri);
  }).catch(console.error);
  /*
  this.camera.getPicture(options).then((imageData) => {
  // imageData is either a base64 encoded string or a file URI
  // If it's base64 (DATA_URL):
  this.myPhoto = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
  // Handle error
});*/
}
browsePhotos()
{
  const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  saveToPhotoAlbum:false
  }

  this.camera.getPicture(options).then((imageData) => {
  // imageData is either a base64 encoded string or a file URI
  // If it's base64 (DATA_URL):
  this.myPhoto = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
  // Handle error
  });
}
/*
async openDeepLink()
 {
     const browser : InAppBrowserObject = this.iab.create(this.link, '_blank', 'hidden = no');

 }
*/

/*
  constructor(public navCtrl: NavController) {

  }
*/
}
