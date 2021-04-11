import { Injectable } from '@angular/core';
import { PROFILE_BAAW_PARTNER } from '../_helpers/constants';
import { ItemTransactionHistoryJson } from '../_models/item-transaction-history-model-json';
import { User, UserJson } from '../_models/User-model';
import { UserAddressService } from './user-address.service';
import { HttpService } from '../http-service/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUpdate: string = environment.host + environment.baseUrl + environment.entity.userUpdate;
  private passwordUpdate: string = environment.host + environment.baseUrl + environment.entity.passwordUpdate;
  private userFavoritesUrl: string = environment.host + environment.baseUrl + environment.entity.userFavorites;
  private userAddFavoritesUrl: string = environment.host + environment.baseUrl + environment.entity.userAddFavorites;
  private userRemoveFavoritesUrl: string = environment.host + environment.baseUrl + environment.entity.userRemoveFavorites;

  constructor(
    private userAddressService: UserAddressService,
    private httpService: HttpService,
    private authService: AuthenticationService,
    ) {}

  getUserProfiles(user: User) : string[] {
      if(user.content == undefined)
        return [];

      return user.content.trim().split(",");
  }

  isBaawPartner(user: User) {
    let profiles: string[] = this.getUserProfiles(user);
    return profiles.includes(PROFILE_BAAW_PARTNER);
  }

  adaptUserToJson(user: User) : UserJson {

    let userJson: UserJson = new UserJson(user);

    userJson.$id = user.id;
    userJson.$name = user.name;
    userJson.$lastname = user.lastname;
    userJson.$userName = user.userName;
    userJson.$email = user.email;
    userJson.$password = user.password;
    userJson.$createdTime = user.createdTime;
    userJson.$userProfileImg = user.userProfileImg;
    userJson.$description = user.description;
    userJson.$token = user.token;

    return userJson;
  }

  adaptUserToModel(userJson: UserJson) : User {

    let user: User = new User();

    user.id = userJson.$id;
    user.name = userJson.$name;
    user.lastname = userJson.$lastname;
    user.userName = userJson.$userName;
    user.email = userJson.$email;
    user.password = userJson.$password;
    user.createdTime = userJson.$createdTime;
    user.userProfileImg = userJson.$userProfileImg;
    user.description = userJson.$description;
    user.token = userJson.$token;

    return user;
  }

  update(user: User) : Observable<User> {
    let userJson = this.adaptUserToJson(user);
    return this.httpService.postAuth(this.userUpdate, userJson, this.authService.getSessionUser());
  }

  updatePassword(user: User) : Observable<User> {
    let userJson = this.adaptUserToJson(user);
    return this.httpService.postAuth(this.passwordUpdate, userJson, this.authService.getSessionUser());
  }

  userFavorites(user: User) : Observable<any[]> {
    let userJson = this.adaptUserToJson(user);
    return this.httpService.getWithHeaders(this.userFavoritesUrl + "/" + user.userName, this.authService.getSessionUser());
  }

  userAddFavorites(user: User, itemId: number) : Observable<any[]> {
    
    console.log("service adding", this.userAddFavoritesUrl + "/" + user.userName + "/" + itemId);
    return this.httpService.getWithHeaders(this.userAddFavoritesUrl + "/" + user.userName + "/" + itemId, this.authService.getSessionUser());
  }

  userRemoveFavorites(user: User, itemId: number) : Observable<any[]> {
    
    return this.httpService.getWithHeaders(this.userRemoveFavoritesUrl + "/" + user.userName + "/" + itemId, this.authService.getSessionUser());
  }


}
