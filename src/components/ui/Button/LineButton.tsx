import { Button, Link } from '@chakra-ui/react'
import { BsLine } from 'react-icons/bs'

export const LineButton = () => {
  return (
    <Link
      isExternal
      href={'https://liff.line.me/1645278921-kWRPP32q/?accountId=442blmbt'}
    >
      <Button
        bgColor={'green.line'}
        borderColor={'white'}
        borderWidth={'1px'}
        color={'white'}
        colorScheme={'green'}
        leftIcon={<BsLine />}
      >
        LINEで予約
      </Button>
    </Link>
  )
}
