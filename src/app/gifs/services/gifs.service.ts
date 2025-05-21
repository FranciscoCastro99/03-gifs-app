import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable, signal } from "@angular/core";
import { environment } from "@enviroments/environment";
import type { GiphyResponse } from "../interface/giphy.interfaces";
import { Gif } from "../interface/gif.interface";
import { GifMapper } from "../mapper/gif.mapper";

@Injectable({providedIn: 'root'})
export class GifsService{

  private http = inject(HttpClient)

  trendingGif = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  constructor(){
    this.loadTrending();
    console.log('servicio creado')
  }

  loadTrending(){
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params:{
        api_key: environment.giphyApiKey,
        limit: 20,
      }
    }).subscribe((resp)=>{
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGif.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log({ gifs });
    })
  }


  searchGifs(query:string){
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
      params:{
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query,
      }
    }).subscribe((resp)=>{
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      console.log({search: gifs});
    })
  }


}
