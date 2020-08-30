import {Guid} from 'guid-typescript';
import Film from './film';
import User from './user';

export default class UserFilm {
  public id: Guid;
  public isLike?: boolean;
  public viewedOn: Date;

  public user?: User;
  public film?: Film;
}
