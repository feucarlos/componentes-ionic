import { NgModule } from "@angular/core"
import { PreloadAllModules, RouterModule, Routes } from "@angular/router"

const routes: Routes = [
  {
    path: "inicio",
    loadChildren: () =>
      import("./pages/inicio/inicio.module").then((m) => m.InicioPageModule),
  },
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full",
  },
  {
    path: "alert",
    loadChildren: () =>
      import("./pages/alert/alert.module").then((m) => m.AlertPageModule),
  },
  {
    path: "action-sheet",
    loadChildren: () =>
      import("./pages/action-sheet/action-sheet.module").then(
        (m) => m.ActionSheetPageModule
      ),
  },
  {
    path: "avatar",
    loadChildren: () =>
      import("./pages/avatar/avatar.module").then((m) => m.AvatarPageModule),
  },
  {
    path: "buttons",
    loadChildren: () =>
      import("./pages/buttons/buttons.module").then((m) => m.ButtonsPageModule),
  },
  {
    path: "card",
    loadChildren: () =>
      import("./pages/card/card.module").then((m) => m.CardPageModule),
  },
  {
    path: "checkbox",
    loadChildren: () =>
      import("./pages/checkbox/checkbox.module").then(
        (m) => m.CheckboxPageModule
      ),
  },
  {
    path: "date-time",
    loadChildren: () =>
      import("./pages/date-time/date-time.module").then(
        (m) => m.DateTimePageModule
      ),
  },
  {
    path: "fab",
    loadChildren: () =>
      import("./pages/fab/fab.module").then((m) => m.FabPageModule),
  },
  {
    path: "grid",
    loadChildren: () =>
      import("./pages/grid/grid.module").then((m) => m.GridPageModule),
  },
  {
    path: "infinite",
    loadChildren: () =>
      import("./pages/infinite/infinite.module").then(
        (m) => m.InfinitePageModule
      ),
  },
  {
    path: "input",
    loadChildren: () =>
      import("./pages/input/input.module").then((m) => m.InputPageModule),
  },
  {
    path: "list",
    loadChildren: () =>
      import("./pages/list/list.module").then((m) => m.ListPageModule),
  },
  {
    path: "list-reorder",
    loadChildren: () =>
      import("./pages/list-reorder/list-reorder.module").then(
        (m) => m.ListReorderPageModule
      ),
  },
  {
    path: "loading",
    loadChildren: () =>
      import("./pages/loading/loading.module").then((m) => m.LoadingPageModule),
  },
  {
    path: "modal",
    loadChildren: () =>
      import("./pages/modal/modal.module").then((m) => m.ModalPageModule),
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('./pages/progress/progress.module').then( m => m.ProgressPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
