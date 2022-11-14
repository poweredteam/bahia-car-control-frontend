import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

import store from './redux/store'
import theme from './styles/chakra/theme'
import router from './routes/Navigate'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
