import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { Geolocation} from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor() {
  }

  private latitude: number;
  private longitude: number;

  public async ngOnInit() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    const map = new Map({
      basemap: "topo-vector" //Reference to the base of the map
    });

    const view = new MapView({
      container: "container", // Reference to the view div 
      map: map, // Reference to the map object created before the view
      zoom: 4, // Sets zoom level based on level of detail (LOD)
      center: [this.longitude, this.latitude] // Sets center point of view using longitude,latitude
    });

  }

}
