import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import MainLayout from '../Components/Layout/MainLayout'
import store from '../redux/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
    <Provider store={store}>
  <MainLayout>
  <Component {...pageProps} />
  </MainLayout>
    </Provider>
    </StrictMode>
  )
}

export default MyApp
