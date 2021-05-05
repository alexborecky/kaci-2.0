import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3180b316 = () => interopDefault(import('../pages/cenik/index.vue' /* webpackChunkName: "pages/cenik/index" */))
const _018134c4 = () => interopDefault(import('../pages/fotografie/index.vue' /* webpackChunkName: "pages/fotografie/index" */))
const _6a09c208 = () => interopDefault(import('../pages/kontakt/index.vue' /* webpackChunkName: "pages/kontakt/index" */))
const _8c42d1a4 = () => interopDefault(import('../pages/o-mne/index.vue' /* webpackChunkName: "pages/o-mne/index" */))
const _3f944933 = () => interopDefault(import('../pages/reference/index.vue' /* webpackChunkName: "pages/reference/index" */))
const _1af23e1b = () => interopDefault(import('../pages/svatby/index.vue' /* webpackChunkName: "pages/svatby/index" */))
const _7494f20e = () => interopDefault(import('../pages/terapie-focenim/index.vue' /* webpackChunkName: "pages/terapie-focenim/index" */))
const _a8a1ae38 = () => interopDefault(import('../pages/vertical/index.vue' /* webpackChunkName: "pages/vertical/index" */))
const _5a948337 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cenik",
    component: _3180b316,
    name: "cenik"
  }, {
    path: "/fotografie",
    component: _018134c4,
    name: "fotografie"
  }, {
    path: "/kontakt",
    component: _6a09c208,
    name: "kontakt"
  }, {
    path: "/o-mne",
    component: _8c42d1a4,
    name: "o-mne"
  }, {
    path: "/reference",
    component: _3f944933,
    name: "reference"
  }, {
    path: "/svatby",
    component: _1af23e1b,
    name: "svatby"
  }, {
    path: "/terapie-focenim",
    component: _7494f20e,
    name: "terapie-focenim"
  }, {
    path: "/vertical",
    component: _a8a1ae38,
    name: "vertical"
  }, {
    path: "/",
    component: _5a948337,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
