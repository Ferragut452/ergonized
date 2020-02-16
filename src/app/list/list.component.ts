import { Component, OnInit } from "@angular/core";
import { JewelryService } from "../jewelry.service";
import { Subscription, Observable } from "rxjs";

let decodeBase64 = function(s) {
  var e = {},
    i,
    b = 0,
    c,
    x,
    l = 0,
    a,
    r = "",
    w = String.fromCharCode,
    L = s.length;
  var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (i = 0; i < 64; i++) {
    e[A.charAt(i)] = i;
  }
  for (x = 0; x < L; x++) {
    c = e[s.charAt(x)];
    b = (b << 6) + c;
    l += 6;
    while (l >= 8) {
      ((a = (b >>> (l -= 8)) & 0xff) || x < L - 2) && (r += w(a));
    }
  }
  return r;
};

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  constructor(private jewelryService: JewelryService) {}

  subscription: Subscription;
  items: any;

  strFormat(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).replace("_", " ");
  }
  ngOnInit() {
    this.subscription = this.jewelryService.getJewelry().subscribe(data => {
      this.items = JSON.parse(decodeBase64(data));
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
