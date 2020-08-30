import {Guid} from 'guid-typescript';
import User from './user';
import Film from './film';

export default class Comment{
  public id: Guid;
  public text?: string;
  public createdOn: Date;
  public createdBy?: User;
  public modifiedOn?: Date;
  public modifiedBy?: User;

  public owner?: User;
  public film?: Film;
}
