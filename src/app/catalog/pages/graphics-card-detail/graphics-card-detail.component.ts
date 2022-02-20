import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Graphic } from '../../interfaces/graphics.interface';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-graphics-card-detail',
  templateUrl: './graphics-card-detail.component.html',
  styleUrls: []
})
export class GraphicsCardDetailComponent implements OnInit {

  graphics!: Graphic

  constructor(
    private graphicsService : GraphicsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.graphicsService.getGraphicsById(id) ),
          tap(console.log)
        )
        .subscribe( resp => {
          this.graphics = resp.graphics;
        })
  }

}
