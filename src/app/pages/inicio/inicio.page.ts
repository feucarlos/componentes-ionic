import { Component, OnInit } from "@angular/core"

interface Componente {
  icon: string
  name: string
  redirecTo: string
}

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: "american-football-outline",
      name: "Action sheet",
      redirecTo: "/action-sheet",
    },
    {
      icon: "alert-circle-outline",
      name: "Alert",
      redirecTo: "/alert",
    },
    {
      icon: "beaker-outline",
      name: "Avatar",
      redirecTo: "/avatar",
    },
    {
      icon: "radio-button-off-outline",
      name: "Buttons",
      redirecTo: "/buttons",
    },
    {
      icon: "card-outline",
      name: "Cards",
      redirecTo: "/card",
    },
    {
      icon: "checkmark-circle-outline",
      name: "Checkbox",
      redirecTo: "/checkbox",
    },
    {
      icon: "calendar-outline",
      name: "Datetime",
      redirecTo: "/date-time",
    },
    {
      icon: "car-outline",
      name: "Fab",
      redirecTo: "/fab",
    },
    {
      icon: "grid-outline",
      name: "Grid",
      redirecTo: "/grid",
    },
    {
      icon: "infinite-outline",
      name: "Infinite Scroll",
      redirecTo: "/infinite",
    },
    {
      icon: "hammer-outline",
      name: "Input forms",
      redirecTo: "/input",
    },
    {
      icon: "list-outline",
      name: "List - sliding",
      redirecTo: "/list",
    },
  ]

  constructor() {}

  ngOnInit() {}
}
