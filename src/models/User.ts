export type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  type: string;
  name: string
  company: string | null;
  email: string | null;
  followers: number;
  created_at: string;
}