import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatIconModule,
  MatTableModule,
  MatBadgeModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
    MatBadgeModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatBadgeModule
  ]
})
export class AngularMaterialModule {}
