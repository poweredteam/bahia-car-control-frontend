import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
// import { BsFileBarGraph, BsFileBarGraphFill } from 'react-icons/bs'
import { RiShieldUserFill, RiShieldUserLine } from 'react-icons/ri'

import { Home } from 'pages'
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
