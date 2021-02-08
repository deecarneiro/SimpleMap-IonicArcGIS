#SimpleMap-IonicArcGIS

Simple map to show how to integrate ArcGIS JS API with Ionic Framework 5.

## Libs/Frameworks

- Node.js
- ArcGIS JS API(@arcgis/core)
- Ionic Framework 5

## Installation

1. Install Ionic Framework, if you don't have it.

```bash
$ npm install -g @ionic/cli
```

```bash
$ cd myMap && ionic serve
```

## Running


To run the app

```bash
$ ionic serve 
```

 
![Simple Map](https://user-images.githubusercontent.com/44411176/107170494-38e23f00-699f-11eb-9a47-bd7c8cac419d.png)  

## Explanations


1. Importing Map and MapView

```javascript
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
```

2. Declaration main objects, map and mapview:

```javascript
  const map = new Map({
      basemap: "topo-vector" //Reference to the base of the map
    });

    const view = new MapView({
      container: "container", // Reference to the view div 
      map: map, // Reference to the map object created before the view
      zoom: 4, // Sets zoom level based on level of detail (LOD)
      center: [this.longitude, this.latitude] // Sets center point of view using longitude,latitude
    });
```

3. Importing geolocation from capacitor:

```javascript
import { Geolocation} from '@capacitor/core';
``` 

4. Getting geolocation

```javascript
const position = await Geolocation.getCurrentPosition();
this.latitude = position.coords.latitude;
this.longitude = position.coords.longitude;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)


