import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashoardSkeletonComponent } from './dashoard-skeleton/dashoard-skeleton.component';
import { DefaultSkeletonComponent } from './default-skeleton/default-skeleton.component';
import { GeneralSkeletonComponent } from './general-skeleton/general-skeleton.component';
import { SkeletonModule } from 'primeng/skeleton';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SkelletonComponent } from './skelleton/skelleton.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { GenericFormsComponent } from './generic-forms/generic-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashoardSkeletonComponent,
    DefaultSkeletonComponent,
    GeneralSkeletonComponent,
    SkelletonComponent,
    GenericTableComponent,
    GenericFormsComponent,

  ],
  exports: [
    DashoardSkeletonComponent,
    DefaultSkeletonComponent,
    GeneralSkeletonComponent,
    SkelletonComponent,
    GenericTableComponent,
    GenericFormsComponent,
],
  imports: [
    CommonModule,
    SkeletonModule,
    PanelModule,
    PanelMenuModule,
    TableModule,
    DialogModule,
    ButtonModule,
    FileUploadModule,
    ProgressBarModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PartegerModule { }
