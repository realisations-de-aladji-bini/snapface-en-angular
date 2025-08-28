import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapService } from '../services/face-snaps-service';

@Component({
    selector: 'app-face-snap-list',
    standalone: true,
    templateUrl: './face-snap-list.component.html',
    styleUrl: './face-snap-list.component.scss',
    imports: [FaceSnapComponent]
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!: FaceSnap[]; // Un tableau de FaceSnaps

  constructor(private faceSnapsService: FaceSnapService) {}

  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }
}
