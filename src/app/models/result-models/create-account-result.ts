import {Error} from '../error';

export class CreateAccountResult {
  succeeded: boolean;
  errors: Error[];
}
