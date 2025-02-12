import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormintbussComponent } from './formintbuss.component';

describe('FormintbussComponent', () => {
  let component: FormintbussComponent;
  let fixture: ComponentFixture<FormintbussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormintbussComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormintbussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
