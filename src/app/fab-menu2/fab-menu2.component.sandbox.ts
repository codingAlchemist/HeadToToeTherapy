import { sandboxOf } from 'angular-playground';
import { MatButtonModule } from '@angular/material';
import { FabMenu2Component } from './fab-menu2.component';
const sandBoxConfig = {
    declarations: [
    ],
    label: 'FabMenuComponent'
};

export default sandboxOf(FabMenu2Component, sandBoxConfig)
.add('fab menu test', {
    template: '<app-fab-menu2></app-fab-menu2>'
});
