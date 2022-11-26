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
  VStack,
  Center
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as ReachLink, useLocation } from 'wouter'

import { adminPages, filteredSections, PA } from '../../utilities/constans'
import AdminPage from './AdminPage'

export default function SectionSideBar({ d }) {
  const [location] = useLocation()

  return d ? (
    <VStack
      as={motion.div}
      spacing="0"
      w="full"
      h="70%"
      display="inline-block"
      transition="0.2s linear">
      {filteredSections.map(({ title, path, activeIcon, inactiveIcon }) => {
        return (
          <Center key={path} boxShadow="base" h="3rem" w="inherit">
            <HStack
              display="inline-block"
              key={title}
              w="inherit"
              h="full"
              cursor="pointer"
              alignItems="center"
              justifyContent="center">
              <Link as={ReachLink} href={path}>
                <HStack
                  as={motion.div}
                  pl="4"
                  w="300px"
                  h="full"
                  transition="0.2s linear">
                  <Icon
                    as={location === path ? activeIcon : inactiveIcon}
                    boxSize="25px"
                  />
                  <Text>{title}</Text>
                </HStack>
              </Link>
            </HStack>
          </Center>
        )
      })}
      <Accordion allowMultiple>
        <AccordionItem boxShadow="base">
          {({ isExpanded }) => (
            <>
              <AccordionButton
                _expanded={{ bg: 'brand.select' }}
                display="inline-flex">
                <HStack w="full">
                  <Icon
                    as={!isExpanded ? PA.inactiveIcon : PA.activeIcon}
                    boxSize="25px"
                  />
                  <Text>{PA.title}</Text>
                  <AccordionIcon />
                </HStack>
              </AccordionButton>
              <AccordionPanel boxShadow="sm">
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
  ) : (
    <VStack spacing="0" w="full" h="70%" display="inline-block">
      {filteredSections.map(({ path, activeIcon, inactiveIcon }) => {
        return (
          <Center key={path} boxShadow="base" h="3rem" w="inherit">
            <Link as={ReachLink} href={path}>
              <Icon
                as={location === path ? activeIcon : inactiveIcon}
                boxSize="25px"
              />
            </Link>
          </Center>
        )
      })}
    </VStack>
  )
}
