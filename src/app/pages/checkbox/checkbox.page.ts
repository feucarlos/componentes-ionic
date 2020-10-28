import { Component, OnInit } from "@angular/core"
import { logging } from "protractor"

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.page.html",
  styleUrls: ["./checkbox.page.scss"],
})
export class CheckboxPage implements OnInit {
  data = [
    {
      name: "primary",
      selected: false,
    },
    {
      name: "secondary",
      selected: true,
    },
    {
      name: "tertiary",
      selected: false,
    },
    {
      name: "success",
      selected: true,
    },
  ]

  constructor() {}

  ngOnInit() {}

  onClick(item: any) {
    console.log(item)
  }
}
