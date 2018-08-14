import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Draft99App1RegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { Draft99App1CountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { Draft99App1LocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { Draft99App1DepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { Draft99App1TaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { Draft99App1EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { Draft99App1JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { Draft99App1JobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Draft99App1RegionMySuffixModule,
        Draft99App1CountryMySuffixModule,
        Draft99App1LocationMySuffixModule,
        Draft99App1DepartmentMySuffixModule,
        Draft99App1TaskMySuffixModule,
        Draft99App1EmployeeMySuffixModule,
        Draft99App1JobMySuffixModule,
        Draft99App1JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Draft99App1EntityModule {}
