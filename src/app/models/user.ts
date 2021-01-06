import Comment from './comment';
import UserFilm from './user-film';

export default class User {
  public id: string;
  public firstName?: string;
  public lastName?: string;
  public userName: string;
  public phone?: string;
  public email?: string;
  public avatarUrl?: string;

  public lastSeenOn?: Date;
  public createdOn?: Date;
  public createdBy?: User;
  public modifiedOn?: Date;
  public modifiedBy?: User;

  public comments?: Comment[];
  public likes?: UserFilm[];
}
