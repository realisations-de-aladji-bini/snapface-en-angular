import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'; //Importation du Français pour le définir comme langue par défaut

registerLocaleData(fr.default); // On définit le Français comme langue par défaut de l'appli

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
