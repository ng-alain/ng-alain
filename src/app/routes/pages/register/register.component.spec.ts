import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { SettingsService } from '@core/services/settings.service';

import { RegisterComponent } from './register.component';

describe('Pages: register', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, SharedModule.forRoot()],
      declarations: [RegisterComponent],
      providers: [SettingsService]
    });
  });

  it('should create an instance', async(() => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
