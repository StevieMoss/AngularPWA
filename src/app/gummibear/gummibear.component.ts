import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GummiBear } from "../logic/GummiBear";
import { GeolocationService } from "../geolocation.service";
import { TastingRating } from "../logic/TastingRating";
import { DataService } from "../data.service";

@Component({
  selector: 'app-gummibear',
  templateUrl: './gummibear.component.html',
  styleUrls: ['./gummibear.component.css']
})
export class GummiBearComponent implements OnInit {

  gummibear : GummiBear;
  tastingEnabled : boolean = false;
  types = ["Fruity", "Sour", "Laces", "Yoghurt","Sugar-Free", "Healthy" ]

  constructor(private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private router: Router,
              private data: DataService
               ) { }

  routingSubscription: any;

  tastingRatingChanged(checked: boolean){
      if (checked){
          this.gummibear.tastingRating = new TastingRating();
      }else{
          this.gummibear.tastingRating = null;
      }
  }

   cancel() {
    this.router.navigate(["/"]);
  }

  save() {
    this.data.save(this.gummibear, result => {
      if (result) {
        this.router.navigate(["/"]);
      }
    });
  }
  
  ngOnInit() {
    this.gummibear = new GummiBear();
    this.routingSubscription = 
      this.route.params.subscribe(params => {
        console.log (params["id"]);
        if (params["id"]) {
          this.data.get(params["id"], response => {
            this.gummibear = response;
            if (this.gummibear.tastingRating){
                this.tastingEnabled = true;
            }
          });
        }
    });
  
  this.geolocation.requestLocation(location => {
    if (location) {
      this.gummibear.location.latitude = location.latitude;
      this.gummibear.location.longitude = location.longitude;
    }
  });
} 

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }
}