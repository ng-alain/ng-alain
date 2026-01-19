import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, effect, inject, model, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HotkeyDirective } from '@delon/abc/hotkey';
import { I18nPipe } from '@delon/theme';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BehaviorSubject, debounceTime, delay, distinctUntilChanged, filter, tap } from 'rxjs';

@Component({
  selector: 'header-search',
  template: `
    <nz-input-wrapper>
      <nz-icon nzInputPrefix [nzType]="focus() ? 'arrow-down' : 'search'" />
      @if (loading()) {
        <nz-icon nzInputSuffix nzType="loading" />
      }
      <input
        type="text"
        nz-input
        [nzAutocomplete]="auto"
        (input)="search($event)"
        (focus)="qFocus()"
        (blur)="qBlur()"
        hotkey="F1"
        [attr.placeholder]="'menu.search.placeholder' | i18n"
      />
    </nz-input-wrapper>
    <nz-autocomplete nzBackfill #auto>
      @for (i of options(); track $index) {
        <nz-auto-option [nzValue]="i">{{ i }}</nz-auto-option>
      }
    </nz-autocomplete>
  `,
  host: {
    class: 'alain-default__search',
    '[class.alain-default__search-focus]': 'focus()',
    '[class.alain-default__search-toggled]': 'searchToggled()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [I18nPipe, NzInputModule, NzIconModule, NzAutocompleteModule, HotkeyDirective]
})
export class HeaderSearch {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly d$ = inject(DestroyRef);
  private readonly search$ = new BehaviorSubject('');
  protected options = signal<string[]>([]);
  protected loading = signal(false);
  protected focus = signal(false);
  protected searchToggled = signal(false);

  readonly toggleChange = model(false);

  constructor() {
    afterNextRender(() => {
      this.search$
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          filter(value => value.length > 0),
          tap(() => this.loading.set(true)),
          delay(500), // Mock http
          takeUntilDestroyed(this.d$)
        )
        .subscribe(value => {
          this.loading.set(false);
          this.options.set(value ? [value, value + value, value + value + value] : []);
        });
    });

    effect(() => {
      const v = this.searchToggled();
      if (v == null) return;

      this.searchToggled.set(v);
      this.focus.set(v);
      const ipt = this.el.querySelector<HTMLInputElement>('.ant-input');
      if (v && ipt) {
        ipt.focus();
      }
    });
  }

  protected qFocus(): void {
    this.focus.set(true);
  }

  protected qBlur(): void {
    this.focus.set(false);
    this.searchToggled.set(false);
    this.options.set([]);
    this.toggleChange.set(false);
  }

  protected search(ev: Event): void {
    this.search$.next((ev.target as HTMLInputElement).value);
  }
}
