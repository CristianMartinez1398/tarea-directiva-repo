import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonInput, IonLabel, IonButton, IonItem, IonRouterLink  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-caso-uno',
  templateUrl: './caso-uno.component.html',
  styleUrls: ['./caso-uno.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonInput, IonLabel, IonButton, IonItem, RouterLink, IonRouterLink, RouterModule]
})
export class CasoUnoComponent{

  numero: number = 0;
  Contador(): void {
    this.numero++;
  }

  constructor() { }

 

}
