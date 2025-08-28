import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
// Définition de notre composant snap (en gros une photo quoi !)
export class FaceSnapComponent {
  @Input() faceSnap! : FaceSnap; //Un attribut de type FaceSnap pour pouvoir l'injecter dans le AppComponent

  constructor(private route: Router) {};

  onViewFaceSnap(){
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
