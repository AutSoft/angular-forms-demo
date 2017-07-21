import { Gender } from './gender.enum';

export class User {
  username: string;
  email: string;
  password: string;
  gender: Gender;
  phone?: string;
}
