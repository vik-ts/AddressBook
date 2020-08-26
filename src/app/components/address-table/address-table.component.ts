import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../models/address';

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.css']
})
export class AddressTableComponent {

  @Input() addressArray: Address[];
  @Output() changedAddressArray = new EventEmitter<Address[]>();

  get sortedAddressArray(): Address[] {
    return this.addressArray ? this.addressArray.sort(item => item.favorite ? -1 : 1) : [];
  }

  constructor() { }

  removeAddress(id: string): void {
    const index = this.addressArray.findIndex(item => item.id === id);
    /* istanbul ignore else*/
    if (index !== -1) {
      this.addressArray.splice(index, 1);
      this.changedAddressArray.emit(this.addressArray);
    }
  }
}
