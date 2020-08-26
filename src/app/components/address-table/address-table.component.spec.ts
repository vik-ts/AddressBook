import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressTableComponent } from './address-table.component';
import { By } from '@Angular/platform-browser';

describe('AddressTableComponent', () => {
  let component: AddressTableComponent;
  let fixture: ComponentFixture<AddressTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressTableComponent);
    component = fixture.componentInstance;
    component.addressArray = [
      { id: '1', favorite: true, surname: 'Иванов', name: 'Иван', patronymic: 'Иванович', phone: '+7(111) 111-11-11' },
      { id: '2', favorite: false, surname: 'Петров', name: 'Ян', patronymic: 'Петрович', phone: '+7(222) 222-22-22' },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work favorites', () => {
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button[id=fav1]')).nativeElement;
    btn.click();
    fixture.detectChanges();
    expect(component.addressArray[0].favorite).toEqual(true);
  });

  it('should work removal', () => {
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button[id=btn0]')).nativeElement;
    btn.click();
    fixture.detectChanges();
    expect(component.addressArray.length).toEqual(1);
  });

  it('should not work favorites in empty table', () => {
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button[id=fav0]')).nativeElement;
    btn.click();
    fixture.detectChanges();
    component.addressArray = null;
    expect(component.sortedAddressArray).toEqual([]);
  });
});
