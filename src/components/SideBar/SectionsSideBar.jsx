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

import { filteredSections, PA } from '../../utilities/constans'
import { adminPages, SECTIONS } from '../../utilities/routes'
import AdminPage from './AdminPage'

export default function SectionSideBar({ d }) {
  const [location] = useLocation()

  return d ? (
    <VStack as={motion.div} spacing="0" w="full" h="70%">
      {filteredSections.map(({ title, path, activeIcon, inactiveIcon }) => {
        return (
          <Center key={path} boxShadow="base" h="3rem" w="full">
            <HStack
              display="inline-block"
              key={title}
              w="inherit"
              h="full"
              cursor="pointer"
              alignItems="center"
              justifyContent="center"
            >
              <Link as={ReachLink} href={path}>
                <HStack
                  as={motion.div}
                  pl="4"
                  w="300px"
                  h="full"
                  transition="0.2s linear"
                >
                  <Icon
                    as={location === path ? activeIcon : inactiveIcon}
                    boxSize="25px"
                  />
                  <Text
                    as={motion.p}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    {title}
                  </Text>
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
                href={PA.path}
                _expanded={{ bg: 'brand.select' }}
                display="inline-flex"
              >
                <HStack w="full">
                  <Icon
                    as={!isExpanded ? PA.inactiveIcon : PA.activeIcon}
                    boxSize="25px"
                  />
                  <Text
                    as={motion.p}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    {PA.title}
                  </Text>
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
    <VStack as={motion.div} spacing="0" w="full" h="60%">
      {SECTIONS.map(({ path, activeIcon, inactiveIcon }) => {
        return (
          <Center
            key={path}
            boxShadow="base"
            h="3rem"
            w="inherit"
            bg={location === path ? 'brand.select' : ''}
          >
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
