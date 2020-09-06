import {Guid} from 'guid-typescript';
import Genre from './genre';

export default class Film {
  public id: Guid;
  public title: string;
  public duration?: string;
  public description?: string;
  public year: Date;
  public director?: string;
  public urlTrailer?: string;
  public preview?: string;
  public genresText?: string;

  public genres?: Genre[];
  public isLiked?: boolean;
}
