// import { HttpClient } from '@angular/common/http';
import { HttpStatusCode } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { StartupService } from '@core';
import { DA_SERVICE_TOKEN, ITokenService, SocialOpenType, SocialService } from '@delon/auth';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { Store } from '@ngxs/store';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { finalize } from 'rxjs/operators';
import { LoginSuccess } from 'src/app/core/store/global.action';

@Component({
  selector: 'passport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [SocialService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginComponent implements OnInit {
  socialUser: SocialUser = new SocialUser();
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    @Optional()
    @Inject(DA_SERVICE_TOKEN)
    private tokenService: ITokenService,
    private startupSrv: StartupService,
    private http: _HttpClient,
    // private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private notificationService: NzNotificationService,
    private store: Store
  ) {}

  error = '';
  type = 0;
  loading = false;

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe(user => {
      if (user) {
        this.loading = true;
        this.http
          .post('/v1/auth/google-auth?_allow_anonymous=true', {
            token: user.idToken
          })
          .pipe(
            finalize(() => {
              this.loading = false;
              this.cdr.detectChanges();
            })
          )
          .subscribe(res => {
            if (res.statusCode !== HttpStatusCode.Ok) {
              this.notificationService.error('Error', res.message);
              this.cdr.detectChanges();
              return;
            }

            this.tokenService.set({
              token: res.data.access_token,
              expired: +new Date() + res.data.expiresIn,
              ...res.data.user
            });

            // Store user data
            this.store.dispatch(new LoginSuccess(res.data.user)).subscribe(() => {
              this.startupSrv.load().subscribe(() => {
                let url = this.tokenService.referrer!.url || '/';
                if (url.includes('/passport')) {
                  url = '/';
                }
                this.router.navigateByUrl(url);
              });
            });
          });
      }
    });
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
