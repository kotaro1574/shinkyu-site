import { Button, Link } from '@chakra-ui/react'
import { BsFillTelephoneFill } from 'react-icons/bs'

export const TelephoneButton = () => {
  return (
    <Link href={'tel:+08063359995'}>
      <Button
        bgColor={'teal.400'}
        borderColor={'white'}
        borderWidth={'1px'}
        color={'white'}
        colorScheme={'teal'}
        leftIcon={<BsFillTelephoneFill />}
      >
        電話で予約
      </Button>
    </Link>
  )
}
