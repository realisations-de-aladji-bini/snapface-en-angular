import { LikeType } from "./snap-like.type";

// Classe FaceSnap contenant les propriétés d'un Snap et un constructeur permettant la création d'objets FaceSnap
export class FaceSnap {

  id!: string;
  location? : string; // Lieu de prise de la photo. Il est optionnel (?)
  /* Contrairement aux autres langages Orientés Objet, Typescript nous permet la déclaration et
  l'initialisation des attributs de classe directement dans le constructeur en les faisant précédés de 'public'*/
  constructor(
    public title: string, // Le titre de la photo,. Le symbole '!' indique qu'on initialisera l'attribut plutard
    public description: string,
    public snapUrl: string,
    public createdAt: Date, // Date à laquelle la photo est postée
    public snaps: number //Nombre de vues de la photo
  ){
    this.id = crypto.randomUUID().substring(0,5) // À chaque instanciation de FaceSnap, on attribut un id alétoire de 5 caractères
  }

  addLike(): void {
    this.snaps++;
  }
  removeLike(): void {
    this.snaps--
  }
  //
  setLocation(location: string) {
    this.location = location;
  }
  // On décide d'indiquer le lieu de la photo. On le passe le lieu et on retour le snap avec désormais un lieu
  withLocation(location : string) {
    this.setLocation(location); //On indique le lieu
    return this; //on retourne le nouveau snap (avec un lieu)
  }

  like(likeType: LikeType) {
    if (likeType === 'like'){
      this.addLike(); // On appelle la méthode permettant de liker la photo
    } else if (likeType === 'unlike'){
      this.removeLike(); // On retire le like du snap à partir de son id
    };
  }


}
