import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { LikeType } from "../models/snap-like.type";

@Injectable({
  providedIn: 'root'
})
// On centralise et gère nos données (faceSnaps) ici afin de pouvoir les partager entre composants
export class FaceSnapService {

  private faceSnaps: FaceSnap[] = [ new FaceSnap(
    'Angular',
    'Icône d\'Angular',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcumR4jrhUuquaBmlWgEzut7NjvK8p58yT6g&s',
    new Date(),
    170).withLocation('Équipe d\'Angular'),// Cette photo a une localisation et on l'indique
     new FaceSnap(
      'Une bonne formation d\'Angular',
      'Quoi de mieux que le fait de se former ?',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGFtWA1L_mUXS0cc6guIUjtNiYhp_DocoCw&s',
      new Date(),
      50),
      new FaceSnap(
        'X',
        'Site officiel de X ancienenment Twiteer ?',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.frandroid.com%2Fculture-tech%2Fweb%2F1752405_x-com-le-nouveau-logo-de-twitter-vient-dune-police-decriture-trouvee-en-ligne&psig=AOvVaw3onpqbIc1lEjq1trK5cRtP&ust=1717704569542000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjHoK-ixYYDFQAAAAAdAAAAABAEhttps://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg',
        new Date(),
        50) //Initialement, la photo n'a aucune vue
       //Initialement, la photo n'a aucune vue
    ];


  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps]
  }

  // On recherche un facesnap à partir de son id puis on le retourne en cas de succès
  getFaceSnapById(faceSnapId: string) {
    const foundFaceSnap = this.faceSnaps.find(faceSnap=>faceSnap.id === faceSnapId)
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found !');
    }
    return foundFaceSnap;
  }
  //On like un snap à partir de son id
  likeSnapById(faceSnapId : string, likeType: LikeType) : void{
    // On recherche le faceSnap correspondant
    const faceSnap: FaceSnap | undefined = this.getFaceSnapById(faceSnapId)
    faceSnap.like(likeType)
  }
}
