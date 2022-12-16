import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
// import { BsFileBarGraph, BsFileBarGraphFill } from 'react-icons/bs'
import { RiShieldUserFill, RiShieldUserLine } from 'react-icons/ri'

import { Home, Login, NewPassword, Register } from 'pages'
import InProgressPage from '../components/inProgressPage'

export const SECTIONS = [
  {
    title: 'INICIO',
    path: '/',
    activeIcon: AiFillHome,
    inactiveIcon: AiOutlineHome,
    component: Home
  },
  {
    title: 'LOGIN',
    path: '/login',
    activeIcon: AiFillHome,
    inactiveIcon: AiOutlineHome,
    component: Login
  },
  // {
  //   title: 'REGISTER',
  //   path: '/register',
  //   activeIcon: AiFillHome,
  //   inactiveIcon: AiOutlineHome,
  //   component: Register
  // },
  // {
  //   title: 'NEW PASSWORD',
  //   path: '/auth/new-password/:token',
  //   activeIcon: AiFillHome,
  //   inactiveIcon: AiOutlineHome,
  //   component: NewPassword
  // },
  {
    title: 'PANEL DE ADMIN',
    path: '/admin',
    activeIcon: RiShieldUserFill,
    inactiveIcon: RiShieldUserLine
  },
  {
    title: 'PP',
    path: '/pip',
    component: InProgressPage
  }
]

export const adminPages = [
  {
    title: 'Estaciones',
    href: '/pip'
  },
  {
    title: 'Técnicos',
    href: '/pip'
  },
  {
    title: 'Productos',
    href: '/pip'
  },
  {
    title: 'Servicios',
    href: '/pip'
  }
]
