import {User} from "models/User";
import {UserRepo} from "models/UserRepo";

export type initialStateType = {
  error: string;
  isLoading: boolean;
  user: User;
  userRepo: UserRepo
}