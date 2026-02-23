import { Item } from "src/app/core/interfaces/item.interfaces"

export interface HomeVm {
    productItems: ProductItemVm[];
}

export interface ProductItemVm extends Item {
    readonly quantity: number;
}
