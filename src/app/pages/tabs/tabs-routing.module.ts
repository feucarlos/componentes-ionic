import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { TabsPage } from "./tabs.page"
import { InfinitePageModule } from "../infinite/infinite.module"

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "",
        redirectTo: "/tabs/account",
        pathMatch: "full",
      },
      {
        path: "account",
        loadChildren: () =>
          import("../avatar/avatar.module").then((m) => m.AvatarPageModule),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("../list-reorder/list-reorder.module").then(
            (m) => m.ListReorderPageModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../infinite/infinite.module").then(
            (m) => m.InfinitePageModule
          ),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
