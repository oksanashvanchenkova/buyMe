import { FormControl, FormGroup } from '@angular/forms';


export function emptyFormBuilder() {
  return new FormGroup({});
}
export function addBookFormBuilder() {
  return new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    author: new FormControl(''),
    description: new FormControl(''),
    publicationYear: new FormControl(0),
    itemCondition: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
  });
}
