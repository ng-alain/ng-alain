import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { <%= componentName %> } from './<%= dasherize(name) %>.component';

describe('<%= componentName %>', () => {
  let component: <%= componentName %>;
  let fixture: ComponentFixture<<%= componentName %>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= componentName %> ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= componentName %>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
