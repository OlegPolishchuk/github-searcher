import {instance} from "api/instaance/instance";
import {PER_PAGE, START_PAGE} from "app-constants";
import {User} from "models/User";
import {UserRepo} from "models/UserRepo";

export class UserReposAPI {
  static fetchData(username: string){
    const fetchUser = instance.get(`users/${username}`);
    const fetchRepos = instance.get(`users/${username}/repos?page=${START_PAGE}&per_page=${PER_PAGE}`);

    return Promise.all([fetchUser,fetchRepos])
      .then(res => [res[0].data, res[1].data])
  }

  static fetchRepos(username: string,page: number){
    return instance.get(`users/${username}/repos?page=${page}&per_page=${PER_PAGE}`)
      .then(res =>{
        console.log(res)
        return res.data
      })
  }
}