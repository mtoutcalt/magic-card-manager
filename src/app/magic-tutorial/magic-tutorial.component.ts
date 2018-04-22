import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-tutorial',
  templateUrl: './magic-tutorial.component.html',
  styleUrls: ['./magic-tutorial.component.css']
})
export class MagicTutorialComponent implements OnInit {

  video: HTMLVideoElement;
  status: any;

  constructor() { }

  ngOnInit() {
    this.video = <HTMLVideoElement> document.getElementById("localvideo");
    this.status = document.getElementById("status");
  }

  //show the video src is playing with mouseover
  play() {
     if (this.video.paused) {
       this.video.play();
       this.status.innerHTML = "Playing " + this.video.currentSrc;
     }
  }


  pause() {
     this.video.pause();
     this.status.innerHTML = "Paused " + this.video.currentSrc;
  }




}
