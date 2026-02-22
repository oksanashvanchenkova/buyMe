import { Item } from "src/app/core/interfaces/books.interfaces";
import { ALL_ITEMS } from "../consts/all-items";

export interface HomeVm {
    productItems: ProductItemVm[];
}

export interface ProductItemVm extends Item {
    readonly quantity: number;
}
export const samleProductItems: ProductItemVm[] = ALL_ITEMS
    .slice(0, 5)
    .map((product, index) => ({
        ...product,
        quantity: index % 3
    }))