import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonInput, IonLabel, IonButton, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css', 'Reprobado.css', 'Aprobado.css'],
  standalone: true,
  imports: [CommonModule,FormsModule,IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonInput, IonButton, IonItem, IonLabel],
})
export class HomePage {

  numero: number = 0;
  Contador(): void {
    this.numero++;
  }

  names: string[] = ['Conejo', 'Perro', 'Gato', 'Vaca', 'Caballo']

  PhoneNumber: number[] = [];

  nota: number = 100
  nota_alumnos: boolean = this.nota > 69;  

  hexadecimal: string = '#D223D7'

  colorButton: string = "primary";
  
   
  
  constructor() {}
}
