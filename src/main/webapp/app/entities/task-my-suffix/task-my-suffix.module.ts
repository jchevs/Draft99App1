import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Draft99App1SharedModule } from 'app/shared';
import {
    TaskMySuffixComponent,
    TaskMySuffixDetailComponent,
    TaskMySuffixUpdateComponent,
    TaskMySuffixDeletePopupComponent,
    TaskMySuffixDeleteDialogComponent,
    taskRoute,
    taskPopupRoute
} from './';

const ENTITY_STATES = [...taskRoute, ...taskPopupRoute];

@NgModule({
    imports: [Draft99App1SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TaskMySuffixComponent,
        TaskMySuffixDetailComponent,
        TaskMySuffixUpdateComponent,
        TaskMySuffixDeleteDialogComponent,
        TaskMySuffixDeletePopupComponent
    ],
    entryComponents: [
        TaskMySuffixComponent,
        TaskMySuffixUpdateComponent,
        TaskMySuffixDeleteDialogComponent,
        TaskMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Draft99App1TaskMySuffixModule {}
