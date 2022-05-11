// import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { StartupService } from '@core';
import { DA_SERVICE_TOKEN, ITokenService, SocialOpenType, SocialService } from '@delon/auth';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'passport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [SocialService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginComponent {
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
    private cdr: ChangeDetectorRef
  ) {}

  error = '';
  type = 0;
  loading = false;

  submit(): void {
    localStorage.clear();
    this.error = '';
    // 默认配置中对所有HTTP请求都会强制 [校验](https://ng-alain.com/auth/getting-started) 用户 Token
    // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
    this.loading = true;
    this.cdr.detectChanges();
    this.http
      .post('/login/account?_allow_anonymous=true', {
        type: this.type,
        userName: 'admin',
        password: 'ng-alain.com'
      })
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe(res => {
        if (res.msg !== 'ok') {
          this.error = res.msg;
          this.cdr.detectChanges();
          return;
        }
        // 清空路由复用信息
        // this.reuseTabService.clear();
        // 设置用户Token信息
        // TODO: Mock expired value
        res.user.expired = +new Date() + 1000 * 60 * 5;
        this.tokenService.set(res.user);
        // 重新获取 StartupService 内容，我们始终认为应用信息一般都会受当前用户授权范围而影响
        this.startupSrv.load().subscribe(() => {
          let url = this.tokenService.referrer!.url || '/';
          if (url.includes('/passport')) {
            url = '/';
          }
          this.router.navigateByUrl(url);
        });
      });
    this.socialAuthService.authState.subscribe(user => {
      this.socialUser = user;
      // this.isLoggedin = user != null;
      console.log(this.socialUser);
      localStorage.setItem('name', this.socialUser.name);
      localStorage.setItem('email', this.socialUser.email);
    });
    if (this.socialUser) {
      this.http
        .post('http://localhost:3000/api/v1/auth/google-auth?_allow_anonymous=true', {
          token: this.socialUser.idToken
        })
        .subscribe(res => {
          console.log(res.data);
          localStorage.setItem('access_token', res.data.access_token);
        });
    }
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      this.submit();
    });
  }
}
