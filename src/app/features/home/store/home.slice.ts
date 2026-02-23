import { Item } from "src/app/core/interfaces/item.interfaces"
import { ICategory } from "../interfaces/category.interface";
import { CATEGORY_ITEMS } from "src/app/core/consts/category-items";

export interface HomeSlice {
    readonly productItems: Item[] | null;
    readonly isBusy: boolean;
    readonly categories: ICategory[];
    readonly searchWord: string;
    readonly cartQuantities: Record<string, number>;
    readonly taxRate: number;
    readonly hasMore: boolean;
    readonly currentPage: number;

}
export const initialHomeSlice: HomeSlice = {
    productItems: null,
    isBusy: false,
    categories: CATEGORY_ITEMS,
    searchWord: '',
    cartQuantities: {},
    taxRate: 0.08,
    hasMore: true,
    currentPage: 1,
}