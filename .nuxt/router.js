import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8c42d1a4 = () => interopDefault(import('../pages/o-mne/index.vue' /* webpackChunkName: "pages/o-mne/index" */))
const _1af23e1b = () => interopDefault(import('../pages/svatby/index.vue' /* webpackChunkName: "pages/svatby/index" */))
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
    path: "/o-mne",
    component: _8c42d1a4,
    name: "o-mne"
  }, {
    path: "/svatby",
    component: _1af23e1b,
    name: "svatby"
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
