import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { UserAddressJson } from 'src/app/_models/User-address-json-model';
import { UserAddress } from 'src/app/_models/User-address-model';
import { User } from 'src/app/_models/User-model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserAddressService } from 'src/app/_services/user-address.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  /** Form Groups */
  profileFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  passwordFormGroup: FormGroup;

  public userSession: User;
  public addressToEdit: UserAddress = new UserAddress();

  // Edit Flags
  public editProfile = false;
  public editAddress = false;
  public editPassword = false;
  private userAddressId: number;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private userService: UserService,
    private addressService: UserAddressService,
  ) {
    this.profileFormGroup = this.formBuilder.group({
      userName: new FormControl('', Validators.required),
      name:     new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email:    new FormControl('', [Validators.email, Validators.required]),
    });

    this.addressFormGroup = this.formBuilder.group({
      name:           new FormControl('', Validators.required),
      lastnames:      new FormControl('', Validators.required),
      street:         new FormControl('', Validators.required),
      intNumber:      new FormControl('', Validators.required),
      extNumber:      new FormControl('', Validators.required),
      zipCode:        new FormControl('', Validators.required),
      state:          new FormControl('', Validators.required),
      city:           new FormControl('', Validators.required),
      suburb:         new FormControl('', Validators.required),
      reference:      new FormControl('', Validators.required),
      phoneNumber:    new FormControl('', Validators.required),
      streetRef:      new FormControl('', Validators.required),
    });

    this.passwordFormGroup = this.formBuilder.group({
      password:     new FormControl('', Validators.required),
      confirmPassword:     new FormControl('', Validators.required),
    });

    this.formDefaultProfileValues();
    this.userSession = this.authService.getSessionUser();

    this.matIconRegistry.addSvgIcon("custom_edit_active",
    this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/profile/Lapiz_activo.svg") );
    
    this.matIconRegistry.addSvgIcon("custom_edit_inactive",
    this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/profile/Lapiz_inactivo.svg") );

    this.formDefaultAddressValues();
  }

  ngOnInit(): void {
  }

  toggleAddressEdit() {
    this.editAddress = !this.editAddress;
    this.formDefaultAddressValues();
  }

  toggleProfileEdit() {
    this.editProfile = !this.editProfile;
    if(this.editProfile) {
      this.formDefaultProfileValues();
    }
  }

  togglePasswordEdit() {
    this.editPassword = !this.editPassword;
  }

  formDefaultAddressValues() {
    console.log(this.userSession.userAdress);
    
    this.addressService.getByUserName(this.userSession.userName)
      .subscribe( (userAddress: UserAddressJson) => {
        
        if(userAddress.id) {
          this.userAddressId = userAddress.id;
        }

        this.addressFormGroup.controls['name']        .setValue(userAddress.name);
        this.addressFormGroup.controls['lastnames']   .setValue(userAddress.lastnames);
        this.addressFormGroup.controls['street']      .setValue(userAddress.street);
        this.addressFormGroup.controls['intNumber']   .setValue(userAddress.intNumber);
        this.addressFormGroup.controls['extNumber']   .setValue(userAddress.extNumber);
        this.addressFormGroup.controls['zipCode']     .setValue(userAddress.zipCode);
        this.addressFormGroup.controls['state']       .setValue(userAddress.state);
        this.addressFormGroup.controls['city']        .setValue(userAddress.city);
        this.addressFormGroup.controls['suburb']      .setValue(userAddress.suburb);
        this.addressFormGroup.controls['reference']   .setValue(userAddress.reference);
        this.addressFormGroup.controls['phoneNumber'] .setValue(userAddress.phoneNumber);
        this.addressFormGroup.controls['streetRef']   .setValue(userAddress.streetRef);
    });
  }

  formDefaultProfileValues() {

    this.authService.getUser(this.authService.getSessionUser().userName).subscribe( (user: User) => {
      
      this.profileFormGroup.controls['userName'].setValue(user.userName);
      this.profileFormGroup.controls['name']    .setValue(user.name);
      this.profileFormGroup.controls['lastname'].setValue(user.lastname);
      this.profileFormGroup.controls['email']   .setValue(user.email);
    });
  }

  onSubmitProfile() {
    console.log(this.profileFormGroup.valid);

    this.userSession.userName = this.profileFormGroup.value.userName;
    this.userSession.name =     this.profileFormGroup.value.name;
    this.userSession.lastname = this.profileFormGroup.value.lastname;
    this.userSession.email =    this.profileFormGroup.value.email;
    
    //this.profileFormGroup.get("username").touched;
    this.userService.update(this.userSession).subscribe( (user: User) => {
      window.location.reload();
      return user;
    });

  }

  onSubmitPassword() {
    console.log(this.profileFormGroup.valid);

    this.passwordFormGroup.value.password;
    this.passwordFormGroup.value.confirmPassword;

    if( this.passwordFormGroup.value.password ==
      this.passwordFormGroup.value.confirmPassword ) {

        this.userSession.password = this.passwordFormGroup.value.confirmPassword;
        this.userService.updatePassword(this.userSession).subscribe( (user: User) => {
          //this.authService.setLogin(user);
          console.log("setLogin", user);
          this.togglePasswordEdit();
          return user;
        });
      }
  }

  onSubmitAddress() {
    console.log(this.profileFormGroup.valid);

    // User Id
    this.addressToEdit.$userId = this.userSession.id;

    if(this.userAddressId) {
      this.addressToEdit.$id = this.userAddressId;
    }

    // Rest of the values
    this.addressToEdit.$name =         this.addressFormGroup.value.name;
    this.addressToEdit.$lastnames =    this.addressFormGroup.value.lastnames;
    this.addressToEdit.$street =       this.addressFormGroup.value.street;
    this.addressToEdit.$intNumber =    this.addressFormGroup.value.intNumber;
    this.addressToEdit.$extNumber =    this.addressFormGroup.value.extNumber;
    this.addressToEdit.$zipCode =      this.addressFormGroup.value.zipCode;
    this.addressToEdit.$state =        this.addressFormGroup.value.state;
    this.addressToEdit.$city =         this.addressFormGroup.value.city;
    this.addressToEdit.$suburb =       this.addressFormGroup.value.suburb;
    this.addressToEdit.$reference =    this.addressFormGroup.value.reference;
    this.addressToEdit.$phoneNumber =  this.addressFormGroup.value.phoneNumber;
    this.addressToEdit.$streetRef =    this.addressFormGroup.value.streetRef;
    

    console.log(this.addressFormGroup.value);
    console.log(this.addressFormGroup.value.name);
    this.addressService.saveJson(this.addressToEdit)
    .subscribe( (userAddress: any) => {
      let user: any = this.authService.getSessionUserJson();

      user.userAddresses = [ userAddress ];
      console.log("user.userAdress", user.userAddresses);
      this.authService.setLogin(user);

      this.editAddress = !this.editAddress;

      this.userSession.userAdress = userAddress;
      window.location.reload();
    });
  }

}
