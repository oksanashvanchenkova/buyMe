// auth.computed.ts

import { computed } from '@angular/core';

export const authComputed = (store: any) => ({

  isLoggedIn: computed(() =>
    store.authenticated()
  ),

  userName: computed(() =>
    store.user()?.name ?? ''
  )

});