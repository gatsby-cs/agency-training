// import wrapWithProvider from './src/state/wrap-with-provider'
// export const wrapRootElement = wrapWithProvider
const addScript = (url) => {
  const script = document.createElement('script')
  script.src = url
  script.async = true
  document.body.appendChild(script)
}
// export const onClientEntry = () => {
//   console.log('OnClientEntry!')
//   addScript('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js')
// }

// export const onInitialClientRender = () => {
//   console.log('OnInitialClientRender!')
//   addScript('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js')
// }
