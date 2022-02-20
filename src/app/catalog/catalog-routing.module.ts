import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsCardListContainerComponent } from './pages/graphics-card-list-container/graphics-card-list-container.component';
import { GraphicsCardDetailComponent } from './pages/graphics-card-detail/graphics-card-detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'graphics-cards',
        component: GraphicsCardListContainerComponent
      },
      {
        path: 'graphics-cards/:id',
        component: GraphicsCardDetailComponent
      },
      {
        path: '**',
        redirectTo: 'graphics-cards'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
