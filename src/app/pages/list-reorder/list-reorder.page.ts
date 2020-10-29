import { Component, OnInit } from "@angular/core"
import { ItemReorderEventDetail } from "@ionic/core"

@Component({
  selector: "app-list-reorder",
  templateUrl: "./list-reorder.page.html",
  styleUrls: ["./list-reorder.page.scss"],
})
export class ListReorderPage implements OnInit {
  personajes: string[] = [
    "Feucarlos",
    "Goffy",
    "Desdicha",
    "Devil",
    "Ivan",
    "Poly",
    "Nico",
  ]

  reorderDisabled = true

  constructor() {}

  ngOnInit() {}

  doReorder(evento: CustomEvent<ItemReorderEventDetail>) {
    // console.log(evento)
    // const itemMover = this.personajes.splice(evento.detail.from, 1)[0]
    // this.personajes.splice(evento.detail.to, 0, itemMover)
    // evento.detail.complete()

    // Como está en la documentación de Ionic
    this.personajes = evento.detail.complete(this.personajes)
    console.log(this.personajes)
  }

  toggleReorder() {
    console.log(this.reorderDisabled)

    this.reorderDisabled = !this.reorderDisabled
  }
}
