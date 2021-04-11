import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http-service/http.service';
import { UserAddressJson } from '../_models/User-address-json-model';
import { UserAddress } from '../_models/User-address-model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {

  private userAddressUri: string = environment.host + environment.baseUrl + environment.entity.userAddres;

  constructor(
    private httpService: HttpService,
    private authService: AuthenticationService,
  ) { }

  getByUserName(userName: string) : Observable<UserAddressJson> {
    return this.httpService.getWithHeaders(this.userAddressUri + "/" + userName, this.authService.getSessionUser());
  }

  save(userAddress: UserAddressJson) : Observable<UserAddressJson> {
    
    return this.httpService.postAuth(this.userAddressUri, userAddress,
      this.authService.getSessionUser() );
  }

  saveJson(userAddress: UserAddress) : Observable<UserAddress> {
    
    return this.httpService.postAuth(this.userAddressUri, userAddress,
      this.authService.getSessionUser() );
  }

  adaptUserAddressToJson(userAddress: UserAddress) : UserAddressJson {

    let userAddressJson: UserAddressJson = new UserAddressJson();

    userAddressJson.id = userAddress.$id;
    userAddressJson.userId = userAddress.$userId;
    userAddressJson.name = userAddress.$name;
    userAddressJson.lastnames = userAddress.$lastnames;
    userAddressJson.street = userAddress.$street;
    userAddressJson.intNumber = userAddress.$intNumber;
    userAddressJson.extNumber = userAddress.$extNumber;
    userAddressJson.zipCode = userAddress.$zipCode;
    userAddressJson.state = userAddress.$state;
    userAddressJson.city = userAddress.$city;
    userAddressJson.suburb = userAddress.$suburb;
    userAddressJson.reference = userAddress.$reference;
    userAddressJson.phoneNumber = userAddress.$phoneNumber;
    userAddressJson.savedInProfile = userAddress.$savedInProfile;

    return userAddressJson;
  }

  
  adaptUserAddressToModel(userAddressJson: UserAddressJson) : UserAddress {

      let userAddress: UserAddress = new UserAddress();

      userAddressJson.id = userAddress.$id;
      userAddressJson.userId = userAddress.$userId;
      userAddressJson.name = userAddress.$name;
      userAddressJson.lastnames = userAddress.$lastnames;
      userAddressJson.street = userAddress.$street;
      userAddressJson.intNumber = userAddress.$intNumber;
      userAddressJson.extNumber = userAddress.$extNumber;
      userAddressJson.zipCode = userAddress.$zipCode;
      userAddressJson.state = userAddress.$state;
      userAddressJson.city = userAddress.$city;
      userAddressJson.suburb = userAddress.$suburb;
      userAddressJson.reference = userAddress.$reference;
      userAddressJson.phoneNumber = userAddress.$phoneNumber;
      userAddressJson.savedInProfile = userAddress.$savedInProfile;
    
      return userAddress;
    }
}
