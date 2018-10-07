import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialService } from '@delon/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-callback',
  template: ``,
  providers: [SocialService],
})
export class CallbackComponent implements OnInit, OnDestroy {
  private router$: Subscription;
  type: string;

  constructor(
    private socialService: SocialService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.router$ = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.mockModel();
    });
  }

  private mockModel() {
    this.socialService.callback({
      token: '123456789',
      name: 'cipchk',
      email: `${this.type}@${this.type}.com`,
      id: 10000,
      time: +new Date(),
    });
  }

  ngOnDestroy() {
    this.router$.unsubscribe();
  }
}
