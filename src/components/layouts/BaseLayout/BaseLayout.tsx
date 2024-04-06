import { Box } from '@chakra-ui/react'
import { Footer } from '@src/components/layouts/Footer/Footer'
import { Header } from '@src/components/layouts/Header/Header'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const BaseLayout = ({ children }: Props) => {
  const router = useRouter()
  const isPrivacyPolicyPage = router.pathname === '/privacyPolicy'

  return (
    <Box bg={'gray.50'} boxShadow={'base'}>
      {!isPrivacyPolicyPage && (
        <Box position={'fixed'} w={'100%'} zIndex={10}>
          <Header px={4} />
        </Box>
      )}
      {children}
      <Footer />
    </Box>
  )
}
