import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlacesService } from 'src/app/places.service';
import { Place } from '../place.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placeService: PlacesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('id');
      console.log(recipeId);
      this.place = this.placeService.getPlace(recipeId);
      console.log(this.place);
    });
  }

 async deletePlace() {
  const alertElement = await this.alertController.create({
      header: 'Esta Seguro de Eliminar este lugar?',
      message: 'Por favor confirmar',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.placeService.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          },
        },
      ],
    });

   await alertElement.present()
  }
}
