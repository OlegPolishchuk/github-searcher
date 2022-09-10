import {instance} from "api/instaance/instance";

export class UserReposAPI {
  fetchRepos(username: string){
    return instance.get(`users/${username}/repos`)
      .then(res => res.data)
      .catch(e => console.warn(e))
  }
}