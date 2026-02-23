import { PartialStateUpdater } from "@ngrx/signals";
import { HomeSlice } from "./home.slice";
import { Item } from "src/app/core/interfaces/item.interfaces"

export function setBusy(isBusy: boolean): PartialStateUpdater<HomeSlice> {
    return _ => ({ isBusy })
}

export function setProductItems(items: Item[]): PartialStateUpdater<HomeSlice> {
  return _ => ({ 
    productItems: items,
    hasMore: items.length > 0 
  });
}

export function appendProductItems(newItems: Item[]): PartialStateUpdater<HomeSlice> {
  return state => ({ 
    productItems: [...(state.productItems || []), ...newItems],
    hasMore: newItems.length > 0 
  });
}