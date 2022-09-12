import {User} from "models/User";
import {UserRepo} from "models/UserRepo";
import {SearchParams} from "models/SearchParams";

export type initialStateType = {
  error: string;
  isLoading: boolean;
  title: string;
  user: User;
  userRepos: UserRepo[];
  searchParams: SearchParams;
}