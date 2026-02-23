import { patchState, signalStore, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { initialHomeSlice } from './home.slice';
import { inject } from '@angular/core';
import { ProductItemsHttp } from 'src/app/core/api/product-items-http';
import { setBusy, setProductItems, appendProductItems } from './home.updaters';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

export const HomeStore = signalStore(
    { providedIn: 'root' },
    withState(initialHomeSlice),
    withProps(_ => {
        const productItemsHttpService = inject(ProductItemsHttp);

        return {
            _productService: productItemsHttpService
        };
    }),
    withMethods((store) => {
        const loadProducts = rxMethod<{ page: number; limit: number; replace: boolean }>(
            pipe(
                tap(({ replace }) => {
                    if (replace) patchState(store, setBusy(true));
                }),
                switchMap(({ page, limit, replace }) =>
                    store._productService.getItem(page, limit).pipe(
                        tapResponse({
                            next: (response) => {
                                if (replace) {
                                    patchState(store,
                                        setProductItems(response.data),
                                        { currentPage: 1 },
                                        setBusy(false)
                                    );
                                } else {
                                    patchState(store,
                                        appendProductItems(response.data),
                                        { currentPage: page }
                                    );
                                }
                            },
                            error: (err) => {
                                console.error(err);
                                patchState(store, setBusy(false));
                            }
                        })
                    )
                )
            )
        );

        return {
            initiate: (limit: number) => loadProducts({ page: 1, limit, replace: true }),
            loadMore: (limit: number) => {
                const nextPage = store.currentPage() + 1;
                loadProducts({ page: nextPage, limit, replace: false });
            }
        };
    }),
    withHooks((store) => ({
        onInit: () => {
            const initialLimit = window.innerWidth > 1024 ? 8 : 4;
            store.initiate(initialLimit);
        }
    }))
)