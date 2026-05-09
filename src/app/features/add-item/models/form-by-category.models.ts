import { FormControl, FormGroup } from '@angular/forms';

export type IBookFormGroup = FormGroup<{
  title: FormControl<string | null>;
  author: FormControl<string | null>;
  description: FormControl<string | null>;
  publicationYear: FormControl<number | null>;
  itemCondition: FormControl<string | null>;
  image: FormControl<string | null>;
  price: FormControl<string | null>;
}>;
