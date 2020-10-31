import { Component, OnInit } from "@angular/core"
import { PopoverController } from "@ionic/angular"
import { PopoverInfoComponent } from "../../components/popover-info/popover-info.component"

@Component({
  selector: "app-popover",
  templateUrl: "./popover.page.html",
  styleUrls: ["./popover.page.scss"],
})
export class PopoverPage implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      mode: "ios",
      backdropDismiss: false,
    })
    await popover.present()
    const { data } = await popover.onWillDismiss()
    console.log(data)
  }
}
