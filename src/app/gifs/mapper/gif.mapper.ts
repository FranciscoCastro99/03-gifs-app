import { Gif } from '../interface/gif.interface';
import { GiphyItem } from '../interface/giphy.interfaces';
export class GifMapper{

  static mapGiphyItemToGif(Item:GiphyItem):Gif{
    return{
      id: Item.id,
      title: Item.title,
      url: Item.images.original.url,
    }
  }

  static mapGiphyItemsToGifArray(items:GiphyItem[]):Gif[]{
    return items.map(this.mapGiphyItemToGif);
  }


}
