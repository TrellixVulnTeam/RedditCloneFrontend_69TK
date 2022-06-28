import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Karma } from "src/app/model/karma";
import { ReactionPost } from "src/app/model/reactionPost";


@Injectable({
  providedIn: 'root'
})
export class ReactionPostService{

  private readonly path = "http://localhost:8080/api/reactionPost";

  constructor(private http: HttpClient) { }


  getKarmaByPost(id:number):Observable<Karma>{
    return this.http.get<Karma>(this.path+`/post`+`/${id}`);
  }

  getKarmaPostByUser(username:string):Observable<Karma>{
    return this.http.get<Karma>(this.path+`/postByUser`+`/${username}`);
  }

  save(reactionPost:ReactionPost): Observable<any>{
    return this.http.post(`${this.path}/create`,{
      reactionType: reactionPost.type,
      userId: reactionPost.user,
      postId: reactionPost.post
    }, {responseType: 'text'});
  }



}
