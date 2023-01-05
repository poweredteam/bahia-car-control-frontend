import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import '@fontsource/roboto/400.css'
import 'react-toastify/dist/ReactToastify.css'

import store from './redux/store'
import theme from './styles/chakra/theme'
import { RouterProvider } from 'react-router-dom'
import router from 'routes/Navigate'

const persistor = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <PersistGate persistor = { persistor }>
           <RouterProvider router={router} />
        </PersistGate>
      </ChakraProvider>
    </Provider>
  </StrictMode>
)
