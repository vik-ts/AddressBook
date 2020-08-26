import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressComponent } from './address.component';
import { FormsModule } from '@angular/forms';
import { By } from '@Angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressComponent ],
      imports: [ FormsModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form be valid', () => {
    const btn = fixture.debugElement.query(By.css('button[type=submit]')).nativeElement;
    btn.click();
    fixture.detectChanges();
    expect(component.formIsValid).toBeTruthy();
  });
});
