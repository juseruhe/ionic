import { Injectable } from '@angular/core';
import { Place } from './places/place.model';


@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageUrl:
        'https://files.lafm.com.co/assets/public/Foto-Torre-Eiffel-.jpg',
      comments: ['awesome', 'wonderful experience'],
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageUrl:
        'http://3.bp.blogspot.com/_nKC7MpruGJU/TLQ3mMjUDTI/AAAAAAAAARU/s-4vsIqVX8o/s1600/P1030605.jpg',
      comments: ['awesome', 'wonderful experience'],
    },
    {
      id: '3',
      title: 'Awesome Place',
      imageUrl:
        'http://3.bp.blogspot.com/_nKC7MpruGJU/TLQ3mMjUDTI/AAAAAAAAARU/s-4vsIqVX8o/s1600/P1030605.jpg',
      comments: [],
    },
  ];

  constructor() {}

  getPlaces() {
    return this.places;
  }

  getPlace(id: string) {
    return {
      ...this.places.find((place) => {
        return place.id === id;
      }),
    };
  }

  addPlace(title: string, imageUrl: string) {
    this.places.push({
      id: this.places.length+1+"",
      title,
      imageUrl,
      comments: []
  })
}

deletePlace(id: string) {
this.places = this.places.filter(place =>{
  return place.id !== id;
})
}

}
