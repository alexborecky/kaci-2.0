import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _714ecd4a = () => interopDefault(import('../pages/gallery-test/index.vue' /* webpackChunkName: "pages/gallery-test/index" */))
const _8c42d1a4 = () => interopDefault(import('../pages/o-mne/index.vue' /* webpackChunkName: "pages/o-mne/index" */))
const _1af23e1b = () => interopDefault(import('../pages/svatby/index.vue' /* webpackChunkName: "pages/svatby/index" */))
const _7494f20e = () => interopDefault(import('../pages/terapie-focenim/index.vue' /* webpackChunkName: "pages/terapie-focenim/index" */))
const _accecbdc = () => interopDefault(import('../pages/test-page/index.vue' /* webpackChunkName: "pages/test-page/index" */))
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
    path: "/gallery-test",
    component: _714ecd4a,
    name: "gallery-test"
  }, {
    path: "/o-mne",
    component: _8c42d1a4,
    name: "o-mne"
  }, {
    path: "/svatby",
    component: _1af23e1b,
    name: "svatby"
  }, {
    path: "/terapie-focenim",
    component: _7494f20e,
    name: "terapie-focenim"
  }, {
    path: "/test-page",
    component: _accecbdc,
    name: "test-page"
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
