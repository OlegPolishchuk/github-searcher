import {User} from "models/User";
import {UserRepo} from "models/UserRepo";

export type initialStateType = {
  error: string;
  isLoading: boolean;
  title: string;
  user: User;
  userRepos: UserRepo[]
}