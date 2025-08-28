import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    RouterLink,
    NgStyle,
    NgClass,
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
// Définition de notre composant snap (en gros une photo quoi !)
export class SingleFaceSnapComponent implements OnInit{
  faceSnap! : FaceSnap; //Un attribut de type FaceSnap pour pouvoir l'injecter dans le AppComponent
  likeOrUnlikeText!: string;// Un texte qui demandera à l'utilisateur de liker ou deliker la photo
  isLiked!: boolean;

  constructor(private faceSnapsService: FaceSnapService,
    private route: ActivatedRoute
  ) {};

  //Définition du ngOnInit (appelé automatiquement à la création de chaque instance du composant)
  // qui se charge d'initialiser chacun des attributs énumérés
  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  // Méthode de like de la photo
  likeSnap(): void{
    this.faceSnapsService.likeSnapById(this.faceSnap.id, 'like');
    this.likeOrUnlikeText = 'Retirer le like';
    this.isLiked = true;
  }
  // Méthode de retrait du like de la photo
  unLikeSnap(): void{
    this.faceSnapsService.likeSnapById(this.faceSnap.id, 'unlike');;
    this.prepareInterface();
  }
  // Méthode de mise à jour des likes sur une image. Elle sera appelée à chaque clic de l'emoji de like
  onLike(): void {
    this.isLiked ? this.unLikeSnap(): this.likeSnap();
  }
  // À l'initialisation, on souhaite avoir le snap choisi à la page précédente afin d'y appliquer les traitements necessaires
  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId)
  }

  // Méthode d'initialisation de l'émoji de like
  private prepareInterface() {
    this.likeOrUnlikeText = "Liker la photo";
    this.isLiked = false;
  }

}
