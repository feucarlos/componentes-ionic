import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-progress",
  templateUrl: "./progress.page.html",
  styleUrls: ["./progress.page.scss"],
})
export class ProgressPage implements OnInit {
  porcentaje = 0.05

  constructor() {}

  ngOnInit() {}

  rangeChange(ev: any) {
    // console.log(ev.detail.value)
    this.porcentaje = ev.detail.value / 100
  }
}
