import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonInput, IonLabel, IonButton, IonItem, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-caso-tres',
  templateUrl: './caso-tres.component.html',
  styleUrls: ['./caso-tres.component.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule,IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonInput, IonButton, IonItem, IonLabel, RouterLink, IonRouterLink, RouterModule],
})
export class CasoTresComponent {

  PhoneNumber: number[] = [];

  constructor() { }

  

}
