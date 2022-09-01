import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/places.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placeService: PlacesService,private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title , imageUrl){
    console.log(title.value+" "+imageUrl.value);
    this.placeService.addPlace(title.value, imageUrl.value)
    this.router.navigate(['/places']);
   }

}
