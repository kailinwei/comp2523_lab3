
import { Internship } from "./Internship";
import { Student } from "./Student";
export class CustomizedMap {
  private googleMap: google.maps.Map;
  constructor(divId) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },  

    });
  }
  addPin(pinnable: Student | Internship) {
    const marker =new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: pinnable.location.latitude,
        lng: pinnable.location.longitude,
      },     
    })

    const contentString = pinnable.infoWindow
  
    
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    
    });

    marker.addListener("click", () => {
      infowindow.open(this.googleMap, marker);
    });

   
   
  }

}






