import {instance} from "api/instaance/instance";

export class UserReposAPI {
  static fetchData(username: string){
    const fetchUser = instance.get(`users/${username}`);
    const fetchRepos = instance.get(`users/${username}/repos`);

    return Promise.all([fetchUser,fetchRepos])
      .then(res => [res[0].data, res[1].data])
  }
}