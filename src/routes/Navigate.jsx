import App from 'App'
import { Login, Home, Register, NewPassword } from 'pages'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: 'auth/new-password',
    element: <NewPassword />
  }
])

export default router
