import { patchState, signalStore, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { initialHomeSlice } from './home.slice';
import { inject } from '@angular/core';
import { ProductItemsHttp } from 'src/app/core/api/product-items-http';
import { setBusy, setProductItems } from './home.updaters';
import { firstValueFrom } from 'rxjs';

export const HomeStore = signalStore(
    { providedIn: 'root' },
    withState(initialHomeSlice),
    withProps(_ => {
        const productItemsHttpService = inject(ProductItemsHttp);

        return {
            _productService: productItemsHttpService
        };
    }),
    withMethods(store => ({
        _initiateProducts: async () => {
            patchState(store, setBusy(true));
            const items = await firstValueFrom(
                store._productService.getItem());
            patchState(store, setBusy(false), setProductItems(items))
        }
    })),
    withHooks((store) => ({
        onInit: () => {
            store._initiateProducts()
        }
    }))
)