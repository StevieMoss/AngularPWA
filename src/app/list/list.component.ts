import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { GummiBear } from "../logic/GummiBear";
import { Router } from '@angular/router';
import { GeolocationService } from '../geolocation.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list : [GummiBear]

  constructor(private data: DataService,
              private router: Router,
              private geolocation: GeolocationService) { }

  getDetails (gummibear: GummiBear){
    this.router.navigate(["/gummibear", gummibear._id]);
  }

  getMaps (gummibear: GummiBear){
    const mapURL = this.geolocation.getMapLink(gummibear.location);
    location.href = mapURL;
  }

  share (gummibear: GummiBear){
    const shareText = `I ate these gummibears from ${gummibear.place} and I tihnk it's a ${gummibear.rating} star gummi`;
    if ('share' in navigator) {
      (navigator as any).share({
        title: gummibear.name,
        text: shareText,
        url: window.location.href
      }).then( () => console.log("shared")).catch( () => console.log("error sharing"));
    } else {
      const shareURL = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareURL;
    }
  }

  ngOnInit() {
    this.data.getList(list => {
      this.list = list;
    })
  }

}

