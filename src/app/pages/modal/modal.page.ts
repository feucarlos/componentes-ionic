import { Component, OnInit } from "@angular/core"
import { ModalController } from "@ionic/angular"
import { ModalInfoPage } from "../modal-info/modal-info.page"

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"],
})
export class ModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async mostrarModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
    })
    return await modal.present()
  }
}
