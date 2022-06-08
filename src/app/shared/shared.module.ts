import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzPaginationModule,
    NzCheckboxModule,
    NzAlertModule,
    NzAutocompleteModule,
    NzMessageModule,
    NzCardModule,
    NzButtonModule,
    NzSelectModule,
    NzLayoutModule,
    NzUploadModule,
    NzImageModule,
    NzToolTipModule,
    NzTransferModule,
    NzInputNumberModule,
    NzMenuModule,
    NzIconModule,
    NzPopconfirmModule,
    NzDrawerModule,
    NzInputModule,
    NzPageHeaderModule,
    NzResultModule,
    NzStepsModule,
    NzFormModule,
    NzGridModule,
    NzTableModule,
    NzDividerModule,
    NzNotificationModule,
    NzSpinModule,
    NzCollapseModule,
    NzTabsModule,
    NzDropDownModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzListModule,
    NzSliderModule,
    NzSpaceModule,
    NzRateModule,
  ],
  exports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzPaginationModule,
    NzCheckboxModule,
    NzAlertModule,
    NzAutocompleteModule,
    NzMessageModule,
    NzCardModule,
    NzButtonModule,
    NzSelectModule,
    NzLayoutModule,
    NzUploadModule,
    NzImageModule,
    NzToolTipModule,
    NzTransferModule,
    NzInputNumberModule,
    NzMenuModule,
    NzIconModule,
    NzPopconfirmModule,
    NzDrawerModule,
    NzInputModule,
    NzPageHeaderModule,
    NzResultModule,
    NzStepsModule,
    NzFormModule,
    NzGridModule,
    NzTableModule,
    NzDividerModule,
    NzNotificationModule,
    NzSpinModule,
    NzCollapseModule,
    NzTabsModule,
    NzDropDownModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzListModule,
    NzSliderModule,
    NzSpaceModule,
    NzRateModule,
    FooterComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
