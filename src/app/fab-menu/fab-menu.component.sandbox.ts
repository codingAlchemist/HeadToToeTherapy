import { sandboxOf } from 'angular-playground';
import { MatButtonModule } from '@angular/material';
import { FabMenuComponent } from './fab-menu.component';
import { FabMenuItemComponent } from './fab-menu-item/fab-menu-item.component';
const sandBoxConfig = {
    declarations: [
        FabMenuComponent,
        FabMenuItemComponent
    ],
    label: 'FabMenuComponent'
};

export default sandboxOf(FabMenuComponent, sandBoxConfig)
.add('fab menu test', {
    template: '<app-fab-menu [buttonOneTitle]="TestTitle"></app-fab-menu>'
});
