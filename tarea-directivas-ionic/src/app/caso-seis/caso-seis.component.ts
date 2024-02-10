import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonInput, IonLabel, IonButton, IonItem, IonRouterLink } from '@ionic/angular/standalone';


@Component({
  selector: 'app-caso-seis',
  templateUrl: './caso-seis.component.html',
  styleUrls: ['./caso-seis.component.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule,IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonInput, IonButton, IonItem, IonLabel, RouterLink, IonRouterLink, RouterModule],
})
export class CasoSeisComponent {

  colorButton: string = "primary";

  constructor() { }

  

}
