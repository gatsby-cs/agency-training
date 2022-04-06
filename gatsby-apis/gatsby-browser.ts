export const disableCorePrefetching = () => {
  // stop Gatsby's default prefetching with gatsby-link
}
export const onClientEntry = () => {
  // called when Gatsby runtime starts in the browser
  // used to manipulate head components
}
export const onInitialClientRender = () => {
  // called when first render (only) is completed
  // used to manipulate head components
}
export const onRouteUpdate = () => {
  // when the route changes
  // used to fire analytic events
}
export const wrapRootElement = () => {
  // wrap the gatsby app in something like a state or query provider
}
//
export const onPostPrefetchPathname = () => {}
export const onPreRouteUpdate = () => {}
export const onPrefetchPathname = () => {}
export const onRouteUpdateDelayed = () => {}
export const onServiceWorkerActive = () => {}
export const onServiceWorkerInstalled = () => {}
export const onServiceWorkerRedundant = () => {}
export const onServiceWorkerUpdateFound = () => {}
export const onServiceWorkerUpdateReady = () => {}
export const registerServiceWorker = () => {}
export const replaceHydrateFunction = () => {}
export const shouldUpdateScroll = () => {}
export const wrapPageElement = () => {}
