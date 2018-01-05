import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationComponent } from './notification/notification.component';
import { ModalComponent } from './modal/modal.component';
import { ModelCustomComponent } from './modal/custom.component';
import { SpinComponent } from './spin/spin.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';
import { GridMasonryComponent } from './gridmasonry/gridmasonry.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsFontComponent } from './iconsfont/iconsfont.component';
import { ColorsComponent } from './colors/colors.component';
import { TreeAntdComponent } from './tree-antd/tree-antd.component';
import { DemoSortableComponent } from './sortable/sortable.component';
import { SweetAlertComponent } from './sweetalert/sweetalert.component';

const routes: Routes = [
    { path: 'buttons', component: ButtonsComponent },
    { path: 'notification', component: NotificationComponent },
    { path: 'modal', component: ModalComponent },
    { path: 'sweetalert', component: SweetAlertComponent },
    { path: 'spin', component: SpinComponent },
    { path: 'dropdown', component: DropdownComponent },
    { path: 'tree-antd', component: TreeAntdComponent },
    { path: 'sortable', component: DemoSortableComponent },
    { path: 'grid', component: GridComponent },
    { path: 'gridmasonry', component: GridMasonryComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'iconsfont', component: IconsFontComponent },
    { path: 'colors', component: ColorsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ElementsRoutingModule { }
