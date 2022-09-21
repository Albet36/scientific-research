import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
    </StrictMode>
  )
}

export default MyApp
