import { PartialStateUpdater } from "@ngrx/signals";
import { HomeSlice } from "./home.slice";
import { Item } from "src/app/core/interfaces/books.interfaces";

export function setBusy(isBusy: boolean): PartialStateUpdater<HomeSlice> {
    return _ => ({ isBusy })
}

export function setProductItems(productItems: Item[]): PartialStateUpdater<HomeSlice> {
    return _ => ({ productItems })
}