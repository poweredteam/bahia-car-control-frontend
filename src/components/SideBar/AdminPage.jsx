import { Stack, Link, Text } from '@chakra-ui/react'
import { Link as ReachLink, useLocation } from 'wouter'

export default function AdminPage({ title, href, i }) {
  const [location] = useLocation()
  return (
    <Stack
      key={title}
      position="relative"
      h="3rem"
      pl="3rem"
      justifyContent="center"
      borderBottom="1px"
      borderTop={i === 0 ? '1px' : 0}
      borderColor="brand.primaryLightVariant"
      cursor="pointer"
      boxShadow="sm"
      _before={{
        content: '""',
        position: 'absolute',
        right: `${location !== href ? '-97%' : 0}`,
        bg: 'brand.select',
        h: '100%',
        w: '97%',
        transition: 'right .2s ease'
      }}>
      <Link as={ReachLink} href={href}>
        <Text zIndex="2">{title}</Text>
      </Link>
    </Stack>
  )
}
