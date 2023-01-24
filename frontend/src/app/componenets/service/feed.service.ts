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
  deleteTweet(tweet:Tweet):Observable<Tweet> {
    return this.http.delete<Tweet>(`${this.url}/tweet/delete/${tweet.id}`);
  }

}
