import { Box } from '@chakra-ui/react'
import { Footer } from '@src/components/layouts/Footer/Footer'
import { Header } from '@src/components/layouts/Header/Header'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const BaseLayout = ({ children }: Props) => {
  return (
    <Box bg={'white'} boxShadow={'base'}>
      <Box position={'fixed'} w={'100%'} zIndex={10}>
        <Header px={4} />
      </Box>
      {children}
      <Footer mt={'120px'} />
    </Box>
  )
}
