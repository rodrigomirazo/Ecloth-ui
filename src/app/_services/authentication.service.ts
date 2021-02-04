import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserJson } from '../_models/User-model';
import { environment } from 'src/environments/environment';
import { SESSION_PREFIX, SESSION_USER, SHA_CRIPT_STRING } from '../_helpers/constants';
import * as CryptoJS from 'crypto-js'; 
import { Subscriber } from 'rxjs/internal/Subscriber';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private encryptSecretKey: string = SHA_CRIPT_STRING;
  private loginUser: string = environment.host + environment.baseUrl + environment.entity.userAuth;
  private validateLoginUser: string = environment.host + environment.baseUrl + environment.entity.userTokenIsValid;
  
  private currentUserCookie: string = SESSION_PREFIX + SESSION_USER;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private db: AngularFirestore,
    ) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(this.currentUserCookie)));
      this.currentUser = this.currentUserSubject.asObservable();

      const things = db.collection('things').valueChanges();
      things.subscribe(console.log);
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    let user: User = new User(username, password);
    return this.http.post<any>(this.loginUser, { username, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          
          let encripted: string = JSON.stringify(user);
          
          localStorage.setItem(this.currentUserCookie, encripted);
          this.currentUserSubject.next(user);
          return user;
      }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem(this.currentUserCookie);
      this.currentUserSubject.next(null);
  }

  getSessionUser(): User {
    let user: User = new User();
    
    if( localStorage.getItem(this.currentUserCookie) == null) {
      return null;
    }

    const storage = JSON.parse(localStorage.getItem(this.currentUserCookie));
    
    user.id = storage.id;
    user.name = storage.name;
    user.lastname = storage.lastname;
    user.userName = storage.userName;
    user.email = storage.email;
    user.password = storage.password;
    user.createdTime = storage.createdTime;
    user.userProfileImg = storage.userProfileImg;
    user.description = storage.description;
    user.token = storage.token;

    return user;
  }

  tokenIsValid(): Observable<boolean> {

    let user: User = this.getSessionUser();
    if(user == null) {
      return new Observable<boolean>(
        (subscriber: Subscriber<boolean>) => subscriber.next(false));
    }

    let userJson: UserJson = new UserJson(user);
    
    return this.http.post<boolean>(this.validateLoginUser, userJson);
  }

  encryptData(data) {

    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
    } catch (e) {
      
    }
  }

  decryptData(data) {

    try {
      const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }

}
