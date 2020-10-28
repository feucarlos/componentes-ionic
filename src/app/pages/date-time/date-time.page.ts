import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-date-time",
  templateUrl: "./date-time.page.html",
  styleUrls: ["./date-time.page.scss"],
})
export class DateTimePage implements OnInit {
  fechaNaci: Date = new Date()

  customYearValues = [1974, 1982, 1976, 1979]

  customPickerOptions = {
    buttons: [
      {
        text: "Hola",
        handler: (event) => {
          console.log(event)
        },
      },
      {
        text: "Mundo",
        handler: (event) => {
          console.log("log!")
        },
      },
    ],
  }

  constructor() {}

  ngOnInit() {}

  cambioFecha(evento) {
    console.log(evento)
  }
}
