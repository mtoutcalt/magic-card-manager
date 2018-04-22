import { Component, OnInit } from '@angular/core';
import { FindStoreService } from '../model/find-store.service';

import {} from '@types/googlemaps';

@Component({
  selector: 'app-findstore',
  templateUrl: './findstore.component.html',
  styleUrls: ['./findstore.component.css'],
  providers: [ FindStoreService ]
})
export class FindstoreComponent implements OnInit {

  lat: string;
  long: string;
  city: string;
  state: string;
  yourLocation: string;
  destination: string;

  constructor(private findStoreService: FindStoreService) { }

  //chains the promises so it first gets local coorindates then feeds those lat/long into google api call to get closest city
  //it then uses the city and state to query google maps directions with keyword 'magic the gathering' to get closest hobby store
  ngOnInit() {
    var coordinatePromise = this.getLocalPosition();
    coordinatePromise.then( (coordinates: any) => {
      console.log(coordinates.latitude);
      console.log(coordinates.longitude);
      this.getClosestGamingStore(coordinates.latitude, coordinates.longitude);
    });

  } //OnInit

   getLocalPosition() {
      return new Promise(function(resolve, reject) {

        var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        function success (pos) {
            resolve(pos.coords);  //resolve the promise
        }

        function fail(error){
            console.log('geolocation failed');
            resolve();
        }
        //get local Coordinates based on native browser geolocation
        navigator.geolocation.getCurrentPosition(success, fail, options);
      });
  }

  getClosestGamingStore(lat, long) {
    let mapElement = document.getElementById('map');
    let panelElement = document.getElementById('panel')

    let directionsService = new google.maps.DirectionsService();  //using google directions service
    let directionsDisplay = new google.maps.DirectionsRenderer();

    let map = new google.maps.Map(mapElement, {
      zoom:7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(panelElement); //set the map and directions in separate displays

    this.findStoreService
      .findClosestGamingStoreWithCoords(lat, long)
      .subscribe(result => {
        this.city = result.results[0].address_components[2].long_name;  //get city
        this.state = result.results[0].address_components[4].short_name;  //get state
        this.yourLocation = this.city + ' , ' + this.state;
        this.destination = "magic the gathering " + this.yourLocation;  //search for 'magic the gathering city, state'

        let request = {
          origin: this.yourLocation,
          destination: this.destination,
          travelMode: google.maps.TravelMode.DRIVING  //get directions based on driving
        };

        //use directions service with inputs and then set the directions that are returned
        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });
      });
  }

  //this code is basically the same except it takes a city and state from the html input instead of based on browser location
  getClosestGamingStoreToInputCityAndState(locationInput) {
        let mapElement = document.getElementById('map');
        let panelElement = document.getElementById('panel');
        panelElement.innerHTML = "";  //clear panel so it doesnt append last search directions

        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer();

        let map = new google.maps.Map(mapElement, {
          zoom:7,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(panelElement);

        this.yourLocation = locationInput;
        this.destination = "magic the gathering " + this.yourLocation;

        let request = {
          origin: this.yourLocation,
          destination: this.destination,
          travelMode: google.maps.TravelMode.DRIVING
        };

        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });
  }


} //end
