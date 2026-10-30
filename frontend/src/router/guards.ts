import type { Router } from 'vue-router'

/*
 * Route guards are registered now so route `meta` can already describe access
 * rules (`requiresAuth`, `requiresAdmin`, `guestOnly`). Enforcement arrives in
 * the authentication stage together with the auth store and JWT handling.
 *
 * Until then every route stays reachable on purpose, so the layout shell and
 * navigation can be reviewed without a backend.
 */
export function registerGuards(router: Router): void {
  router.beforeEach(() => true)
}
