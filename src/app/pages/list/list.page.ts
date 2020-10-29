import { Component, OnInit, ViewChild } from "@angular/core"
import { IonList } from "@ionic/angular"
import { Observable } from "rxjs"
import { DataService } from "../../services/data.service"

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"],
})
export class ListPage implements OnInit {
  @ViewChild(IonList) lista: IonList
  usuarios: Observable<any>

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios()
  }

  favorite(user: any) {
    console.log("favorite: " + user.name)
    this.lista.closeSlidingItems()
  }

  share(user: any) {
    console.log("share: " + user.name)
    this.lista.closeSlidingItems()
  }

  borrar(user: any) {
    console.log("Borrar: " + user.name)
    this.lista.closeSlidingItems()
  }
}
