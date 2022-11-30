import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { BsFileBarGraph, BsFileBarGraphFill } from 'react-icons/bs'
import { RiShieldUserFill, RiShieldUserLine } from 'react-icons/ri'

import { Home } from 'pages'
import { Card } from 'pages/Home/components'

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
    title: 'INFORMES',
    path: '/info',
    activeIcon: BsFileBarGraphFill,
    inactiveIcon: BsFileBarGraph,
    component: Card
  }
]

export const adminPages = [
  {
    title: 'Estaciones',
    href: '/stat'
  },
  {
    title: 'Técnicos',
    href: '/tecn'
  },
  {
    title: 'Productos',
    href: '/prod'
  },
  {
    title: 'Servicios',
    href: '/serv'
  }
]
