import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

let STORAGE_KEY = "num23";
let itemsStorage = {
  fetch: function() {
    var items = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return items;
  },
  save: function(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  },
  remove: function() {
    localStorage.removeItem(STORAGE_KEY);
  }
};

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor() {}

  name = new FormControl("", [
    Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.minLength(1)
  ]);

  lsName: any;

  setName() {
    itemsStorage.save(this.name.value);
  }
  clearName() {
    this.name.setValue("");
    itemsStorage.remove();
  }

  get colorName() {
    if (this.lsName.length !== 0) {
      return this.lsName % 2 == 0 ? "green" : "red";
    } else return "#ccc";
  }

  ngOnInit() {
    this.lsName = itemsStorage.fetch();
  }
}
