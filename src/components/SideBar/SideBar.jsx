import { HStack, VStack, Text } from '@chakra-ui/react'

export default function SideBar() {
  const sections = ['INICIO', 'PANEL ADMIN', 'CLIENTES', 'USUARIOS', 'INFORMES']
  return (
    <>
      <VStack spacing={1}>
        {sections.map((section) => {
          return (
            <HStack key={section}>
              <Text>{section}</Text>
            </HStack>
          )
        })}
      </VStack>
    </>
  )
}
