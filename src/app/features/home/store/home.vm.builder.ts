import { Item } from "src/app/core/interfaces/item.interfaces";
import { ICategory } from "../interfaces/category.interface";
import { HomeVm, ProductItemVm } from "./home.vm";

export function buildHomeVm(
    items: Item[],
    category: ICategory[],
    quantities: Record<string, number>,
    searchWord: string
): HomeVm {
    return {
        productItems: buildProductItems()
    }

    function buildProductItems(): ProductItemVm[] {
        const word = searchWord.trim().toLowerCase();

        return items.filter(i => i.title.toLocaleLowerCase().includes(word))
            .map(item => ({
                ...item,
                quantity: quantities[item.id] || 0
            }))
    }
}