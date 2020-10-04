import {Guid} from 'guid-typescript';

export class LikeOrDislikeRequest{
  public userId: string;
  public filmId: Guid;
  public likeOrDislike: boolean;

  constructor(userId: string = '', filmId: Guid = null, likeOrDislike: boolean = null){
    this.userId = userId;
    this.filmId = filmId;
    this.likeOrDislike = likeOrDislike;
  }
}
