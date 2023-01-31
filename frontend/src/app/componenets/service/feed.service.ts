import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tweet } from '../interfaces/tweet';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  readonly url = environment.url;
  constructor(private http:HttpClient) { }
  /*
  * Gets all tweets from the backend.
  */
  getFeed():Observable<Tweet[]> {
    return this.http.get<Tweet[]>(`${this.url}/tweet/feed`);
  }
  /*
  * Posts a tweet to the backend.
  */
  postTweet(tweet:Tweet):Observable<Tweet> {
    return this.http.post<Tweet>(`${this.url}/tweet/post`, tweet);
  }
  /*
  * Deletes a tweet from the backend.
  */
  deleteTweet(tweet:Tweet):Observable<void> {
    return this.http.delete<void>(`${this.url}/tweet/delete/${tweet.id}`);
  }

  /*
  * Get Tweet by Id
  */
  getTweetById(id:number):Observable<Tweet> {
    return this.http.get<Tweet>(`${this.url}/tweet/${id}`);
  }

  /*
  * Response to tweet
  */
  responseTweet(response:{responeToId:number, message:string}):Observable<Tweet> {
    console.log(response);
    return this.http.post<Tweet>(`${this.url}/tweet/response`, response);
  }

  /*
  * Like a tweet
  */
  likeTweet(tweet:Tweet):Observable<Tweet> {
    return this.http.post<Tweet>(`${this.url}/tweet/like`, tweet);
  }

}
