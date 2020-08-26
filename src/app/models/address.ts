export class Address {
  id: string;
  favorite: boolean;
  surname: string;
  name: string;
  patronymic: string;
  phone: string;

  constructor(id, favorite: boolean, surname: string, name: string, patronymic: string, phone: string) {
    this.id = id;
    this.favorite = favorite;
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
    this.phone = phone;
  }
}
