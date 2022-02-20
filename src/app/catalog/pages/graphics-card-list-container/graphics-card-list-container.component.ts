import { Component, OnInit } from '@angular/core';
import { GraphicsService } from '../../services/graphics.service';
import { Graphic, Graphics } from '../../interfaces/graphics.interface';


@Component({
  selector: 'app-graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  styleUrls: []
})
export class GraphicsCardListContainerComponent implements OnInit {


  graphics: Graphic[] = []
  termino: string = '';

  constructor(
    private graphicsService: GraphicsService
  ) { }

  ngOnInit(): void {

     this.getGraphics();

  }

  getGraphics() {
    this.graphicsService.getGraphics().subscribe( resp => {
      this.graphics = resp.graphics
    });
  }

  buscando() {

    if( this.termino.length === 0 ){
      return this.getGraphics();
    }

    this.graphicsService.getGraphicsByName(this.termino.trim())
        .subscribe( resp => {
          this.graphics = resp.graphics
        })
  }


}
