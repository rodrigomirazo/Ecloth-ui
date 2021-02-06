import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserJson } from '../_models/User-model';
import { environment } from 'src/environments/environment';
import { SESSION_PREFIX, SESSION_USER, SHA_CRIPT_STRING } from '../_helpers/constants';
import * as CryptoJS from 'crypto-js';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";


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

    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
    
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
      console.log("login out");
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



    // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      });
  }
  
    // Sign up with email/password
    SignUp(email, password) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          /* Call the SendVerificaitonMail() function when new user sign 
          up and returns promise */
          this.SendVerificationMail();
          this.SetUserData(result.user);
        }).catch((error) => {
          window.alert(error.message)
        })
    }
  
    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
      
      return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email-address']);
      })
    }
  
    // Reset Forggot password
    ForgotPassword(passwordResetEmail) {
      return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
    }
  
    // Returns true when user is looged in and email is verified
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null && user.emailVerified !== false) ? true : false;
    }
  
    // Sign in with Google
    GoogleAuth() {
      return this.AuthLogin(new auth.GoogleAuthProvider());
    }
  
    // Auth logic to run auth providers
    AuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        this.ngZone.run(() => {
          this.router.navigate(['index']);
        })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
    }

    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userData: any = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        ima: user.photoURL,
        emailVerified: user.emailVerified
      }
      return userRef.set(userData, {
        merge: true
      })
    }
    
    // Sign out 
    SignOut() {
      return this.afAuth.auth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['sign-in']);
      });
    }

}
