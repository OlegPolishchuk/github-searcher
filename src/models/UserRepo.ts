import {User} from "models/User";

export type UserRepo = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: User;
  html_url: string;
  description: string | null;
  forks_count: number;
  language: string;
}