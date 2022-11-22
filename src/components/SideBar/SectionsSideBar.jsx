<<<<<<< HEAD
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  HStack,
  Icon,
  Link,
  Text,
  VStack
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as ReachLink, useLocation } from 'wouter'

import { adminPages, filteredSections, PA } from '../../utilities/constans'
import AdminPage from './AdminPage'

export default function SectionSideBar() {
  const [location] = useLocation()

  return (
    <VStack spacing="0" w="full" h="70%">
      {filteredSections.map(({ title, path, activeIcon, inactiveIcon }) => {
        return (
          <HStack key={title} h="3rem" w="inherit" cursor="pointer">
            <Link as={ReachLink} href={path}>
              <HStack
                as={motion.div}
                pl="4"
                h="3rem"
                w="300px"
                transition="0.2s linear">
                <Icon
                  as={location === path ? activeIcon : inactiveIcon}
                  w="25px"
                  h="25px"
                />
                <Text>{title}</Text>
              </HStack>
            </Link>
          </HStack>
        )
      })}
      <Accordion allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton _expanded={{ bg: 'brand.select' }}>
                <HStack w="full">
                  <Icon
                    as={!isExpanded ? PA.inactiveIcon : PA.activeIcon}
                    w="25px"
                    h="25px"
                  />
                  <Text>{PA.title}</Text>
                  <AccordionIcon />
                </HStack>
              </AccordionButton>
              <AccordionPanel>
                {adminPages?.map(({ title, href }, i) => {
                  return (
                    <AdminPage key={title} title={title} href={href} i={i} />
                  )
                })}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </VStack>
  )
}
=======
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  HStack,
  Icon,
  Link,
  Text,
  VStack
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as ReachLink, useLocation } from 'wouter'

import { adminPages, filteredSections, PA } from '../../utilities/constans'
import AdminPage from './AdminPage'

export default function SectionSideBar() {
  const [location] = useLocation()

  return (
    <VStack spacing="0" w="full" h="70%">
      {filteredSections.map(({ title, path, activeIcon, inactiveIcon }) => {
        return (
          <HStack key={title} h="3rem" w="inherit" cursor="pointer">
            <Link as={ReachLink} href={path}>
              <HStack
                as={motion.div}
                pl="4"
                h="3rem"
                w="300px"
                transition="0.2s linear">
                <Icon
                  as={location === path ? activeIcon : inactiveIcon}
                  w="25px"
                  h="25px"
                />
                <Text>{title}</Text>
              </HStack>
            </Link>
          </HStack>
        )
      })}
      <Accordion allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton _expanded={{ bg: 'brand.select' }}>
                <HStack w="full">
                  <Icon
                    as={!isExpanded ? PA.inactiveIcon : PA.activeIcon}
                    w="25px"
                    h="25px"
                  />
                  <Text>{PA.title}</Text>
                  <AccordionIcon />
                </HStack>
              </AccordionButton>
              <AccordionPanel>
                {adminPages?.map(({ title, href }, i) => {
                  return (
                    <AdminPage key={title} title={title} href={href} i={i} />
                  )
                })}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </VStack>
  )
}
>>>>>>> 48008d3ae4976e72cdf6063387e04cb84f4784be
