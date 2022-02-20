import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { GraphicsCardListContainerComponent } from './pages/graphics-card-list-container/graphics-card-list-container.component';
import { GraphicsCardDetailComponent } from './pages/graphics-card-detail/graphics-card-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GraphicsCardListContainerComponent,
    GraphicsCardDetailComponent,
    HomeComponent,      
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class CatalogModule { }
