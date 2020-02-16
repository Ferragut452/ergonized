import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor() {}

  // Task 1

  // Write a function that find the most frequent character  in a string (case insensitive)

  getMax(str): string {
    var max = 0,
      maxChar = "";
    str.split("").forEach(function(char) {
      if (str.split(char).length > max) {
        max = str.split(char).length;
        maxChar = char;
      }
    });
    return maxChar;
  }

  //   Task 3
  // Write script that will parse query params from url and transform it into object with according key and value.

  paramsToObject(url): string {
    return url
      .slice(url.indexOf("?"))
      .slice(1)
      .split("&")
      .map(p => p.split("="))
      .reduce((obj, pair) => {
        const [key, value] = pair.map(decodeURIComponent);
        return { ...obj, [key]: value };
      }, {});
  }

  ngOnInit() {
    let maxChar = this.getMax("huhul5l55EEEEE");
    console.log(maxChar);

    let params = this.paramsToObject(
      "http://localhost:63342/test/index.html?em=world&ew=book"
    );
    console.log(params);
  }
}
