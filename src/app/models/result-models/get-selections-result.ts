import Film from '../film';

export class GetSelectionsResult {
  public randomFilms: Film[];
  public sameUserFilms: Film[];
  public knnFilms: Film[];
  public popularFilms: Film[];
}
