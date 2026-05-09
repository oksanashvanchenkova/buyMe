import { CATEGORY_ITEMS } from 'src/app/core/consts/category-items';
import { ICategory } from '../../home/interfaces/category.interface';
import { FormGroup } from '@angular/forms';
import { IBookFormGroup } from '../models/form-by-category.models';

export interface AddItemSlice {
  readonly categories: ICategory[];
  readonly selectedCategory: number;
  readonly bookForm: {
    id: number;
    form: IBookFormGroup | null;
  };
  readonly formDate: any;
  readonly formDataLoader: boolean;
  readonly formDataError: boolean;
  readonly formErrorMessage: string;
  readonly image: any[];
  readonly imageLoader: boolean;
  readonly imageError: boolean;
}
export const initialAddItemSlice: AddItemSlice = {
  categories: CATEGORY_ITEMS,
  selectedCategory: 0,
  bookForm: {
    id: 1,
    form: null,
  },
  formDate: null,
  formDataLoader: false,
  formDataError: false,
  formErrorMessage: '',
  image: [],
  imageLoader: false,
  imageError: false,
};
