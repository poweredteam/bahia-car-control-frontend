import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { RiShieldUserFill, RiShieldUserLine } from 'react-icons/ri'
import { BsFileBarGraphFill, BsFileBarGraph } from 'react-icons/bs'

export const SECTIONS = [
  {
    title: 'INICIO',
    href: '/',
    activeIcon: AiFillHome,
    inactiveIcon: AiOutlineHome
  },
  {
    title: 'PANEL DE ADMIN',
    href: '/admin',
    activeIcon: RiShieldUserFill,
    inactiveIcon: RiShieldUserLine
  },
  {
    title: 'INFORMES',
    href: '/informes',
    activeIcon: BsFileBarGraphFill,
    inactiveIcon: BsFileBarGraph
  }
]
