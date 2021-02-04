import { Injectable } from '@angular/core';
import { ItemTransactionHistoryJson } from '../_models/item-transaction-history-model-json';
import { User, UserJson } from '../_models/User-model';
import { UserAddressService } from './user-address.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userAddressService: UserAddressService) {}

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

}
