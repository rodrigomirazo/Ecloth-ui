import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-intercept-verification',
  templateUrl: './intercept-verification.component.html',
  styleUrls: ['./intercept-verification.component.css']
})
export class InterceptVerificationComponent implements OnInit {

  public verificationMode: string;
  public verificationTitle: string;
  public verificationSuccessMessage: string;
  public verificationErrorMessage: string;
  public verificationNextLink: string;
  
  
  public correctCode: boolean;

  constructor(
    public authService: AuthenticationService,
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log(params);
      if(params.mode) {
        this.verificationMode = params.mode;
        this.handleUserManagement(params.mode, params.oobCode);
      }
    });
  }

  // Handle the user management action.
  handleUserManagement(mode: string, actionCode: string) {
    let lang = "esp";
    let continueUrl = "console/profile";
    switch (mode) {
      case 'resetPassword':
        // Display reset password handler and UI.
        this.verificationTitle = "Reinicio de Contraseña";
        this.handleResetPassword(actionCode, continueUrl, lang);
        break;
      case 'recoverEmail':
        // Display email recovery handler and UI.
        this.verificationTitle = "Recuperación de Correo";
        this.handleRecoverEmail(actionCode, lang);
        break;
      case 'verifyEmail':
        // Display email verification handler and UI.
        this.verificationTitle = "Verificación de Usuario";
        this.handleVerifyEmail(actionCode, continueUrl, lang);
        break;
      default:
        // Error: invalid mode.
    }
  }

  handleVerifyEmail(actionCode, continueUrl, lang): void {
    // Localize the UI to the selected language as determined by the lang
    // parameter.
    // Try to apply the email verification code.
    this.afAuth.auth.applyActionCode(actionCode).then( (resp: any) => {
      // Email address has been verified.
  
      // TODO: Display a confirmation message to the user.
      // You could also provide the user with a link back to the app.
      console.log("resp: ", resp);
      this.correctCode = true;
      // TODO: If a continue URL is available, display a button which on
      // click redirects the user back to the app via continueUrl with
      // additional state determined from that URL's parameters.
    }).catch( (error) => {
      this.correctCode = false;
      // Code is invalid or expired. Ask the user to verify their email address
      // again.
    });
  }

  handleRecoverEmail(actionCode, lang) {
    // Localize the UI to the selected language as determined by the lang
    // parameter.
    var restoredEmail = null;
    // Confirm the action code is valid.
    this.afAuth.auth.checkActionCode(actionCode).then(function(info) {
      // Get the restored email address.
      restoredEmail = info['data']['email'];
  
      // Revert to the old email.
      return this.afAuth.auth.applyActionCode(actionCode);
    }).then(function() {
      // Account email reverted to restoredEmail
  
      // TODO: Display a confirmation message to the user.
  
      // You might also want to give the user the option to reset their password
      // in case the account was compromised:
      this.afAuth.auth.sendPasswordResetEmail(restoredEmail).then(function() {
        // Password reset confirmation sent. Ask user to check their email.
      }).catch(function(error) {
        // Error encountered while sending password reset code.
      });
    }).catch(function(error) {
      // Invalid code.
    });
  }

  handleResetPassword(actionCode, continueUrl, lang) {
    // Localize the UI to the selected language as determined by the lang
    // parameter.
    var accountEmail;
    // Verify the password reset code is valid.
    this.afAuth.auth.verifyPasswordResetCode(actionCode).then(function(email) {
      var accountEmail = email;
  
      // TODO: Show the reset screen with the user's email and ask the user for
      // the new password.
  
      // Save the new password.
      let newPassword = "";
      this.afAuth.auth.confirmPasswordReset(actionCode, newPassword).then(function(resp) {
        // Password reset has been confirmed and new password updated.
  
        // TODO: Display a link back to the app, or sign-in the user directly
        // if the page belongs to the same domain as the app:
        // auth.signInWithEmailAndPassword(accountEmail, newPassword);
  
        // TODO: If a continue URL is available, display a button which on
        // click redirects the user back to the app via continueUrl with
        // additional state determined from that URL's parameters.
      }).catch(function(error) {
        // Error occurred during confirmation. The code might have expired or the
        // password is too weak.
      });
    }).catch(function(error) {
      // Invalid or expired action code. Ask user to try to reset the password
      // again.
    });
  }

}
