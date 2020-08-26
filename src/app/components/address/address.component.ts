import { Component, OnInit } from '@angular/core';
import { Address } from '../../models/address';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressArray: Address[];
  addedAddress: Address;
  formIsValid: boolean;
  phoneMask = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  constructor() { }

  ngOnInit(): void {
    this.addressArray = [
      { id: Guid.create().toString(), favorite: true, surname: 'Иванов', name: 'Иван', patronymic: 'Иванович', phone: '+7(111) 111-11-11' },
      { id: Guid.create().toString(), favorite: false, surname: 'Петров', name: 'Ян', patronymic: 'Петрович', phone: '+7(222) 222-22-22' },
    ];
    this.initAddress();
    this.formIsValid = true;
  }

  initAddress(): Address {
    return this.addedAddress = {
      id: Guid.create().toString(),
      favorite: false,
      surname: null,
      name: null,
      patronymic: null,
      phone: null
    };
  }

  addAddress(): void {
    this.addressArray.push(this.addedAddress);
    this.initAddress();
    this.formIsValid = true;
  }
}
