import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** Short page name used for the document title and layout headings. */
    title?: string
    /** Reserved for the authentication stage. */
    requiresAuth?: boolean
    /** Reserved for the authentication stage. */
    requiresAdmin?: boolean
    /** Reserved for the authentication stage. */
    guestOnly?: boolean
  }
}

export {}
