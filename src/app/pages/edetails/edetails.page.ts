import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { strings } from '../../config/strings';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';
import { AdmobService } from '../../services/admob.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-edetails',
  templateUrl: './edetails.page.html',
  styleUrls: ['./edetails.page.scss']
})
export class EdetailsPage implements OnInit {

  public strings = strings;
  exercise: any = {};
  isLoading = false;
  id: any;
  isInfoHidden = true;
  isInstruHidden = true;
  isTipsHidden = true;
  orientation = 'landscape';

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private streamingMedia: StreamingMedia,
    private admob: AdmobService,
    private screenOrientation: ScreenOrientation
    ) {}

    ngOnInit() {
      this.admob.HideBannerAd();
      this.setPortrait();
      if( this.orientation === 'landscape') {
        this.setPortrait();
      }
    }

    async ionViewWillEnter() {
      this.isLoading = true;
      this.route.params.subscribe(
        data => {
          this.id = data.id;
          this.getDetails();
          
          if (!this.id) {
            this.goBack();
          }
        }
      );
    }

    goBack() {
      this.router.navigate(['/home']);
    }

    toggleInfo() {
      this.isInfoHidden = !this.isInfoHidden;
    }

    toggleInstru() {
      this.isInstruHidden = !this.isInstruHidden;
    }

    toggleTips() {
      this.isTipsHidden = !this.isTipsHidden;
    }

    getDetails() {
    this.dataService.getDataExerciseById(this.id)
    .subscribe( resp => {
      this.exercise = resp[0];
      this.isLoading = false;
    } );
}

play() {
  this.unlockScreenOrientation();
  this.observeScreenOrientation();

  const videoUrl = this.exercise.exercise_video;
  const options: StreamingVideoOptions = {
    successCallback: () => { console.info('Video played'); },
    errorCallback: (e) => { console.info('Error streaming'); },
    orientation: `${this.screenOrientation.type}`,
    shouldAutoClose: false,
    controls: true
  };

  // var videoUrl = STREAMING_VIDEO_URL;
  // tslint:disable-next-line: max-line-length
  // this.streamingMedia.playVideo(videoUrl, options);
  // exercise_video
  
  // <p class="value">{{exercise.exercise_video}}
  // this.streamingMedia.playVideo('https://sixpack.sivnot.com/videos/RenegadeRow.mp4', options);
  this.streamingMedia.playVideo(videoUrl, options);
}

getCurrentPosition(){

}

setPortrait() {
  // set to portrait
  // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  this.lockScreenOrientation();
}

setLandscape() {
  // set to portrait
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
}

getCurrentScreenOrientation(){
  // get current
  console.info(this.screenOrientation.type); // logs the current orientation, example: 'landscape'  
}

unlockScreenOrientation(){
  // allow user rotate
  this.screenOrientation.unlock();
}

lockScreenOrientation(){
  try{
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }catch(error){
    console.error(error);
    
  }
}

observeScreenOrientation(){
  // detect orientation changes
  this.screenOrientation.onChange().subscribe(
    () => {
      console.warn("Orientation Changed");
    }
  );
}


}
