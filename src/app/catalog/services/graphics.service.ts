import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Graphics } from '../interfaces/graphics.interface';


const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(
    private http: HttpClient
  ) { }

  getGraphics() {
   return this.http.get<Graphics>(`${URL}/graphics`)
               
  }

  getGraphicsByName( name: string) {
    return this.http.get<Graphics>(`${URL}/search/${name}`)
  }

  getGraphicsById( id: string) {
    return this.http.get<Graphics>(`${URL}/search/id/${id}`)
  }
}
