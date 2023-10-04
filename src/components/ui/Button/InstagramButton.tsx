import { Button, ButtonProps, Link } from '@chakra-ui/react'
import { BsInstagram } from 'react-icons/bs'

export const InstagramButton = ({ ...props }: ButtonProps) => {
  return (
    <Link
      isExternal
      href={'https://www.instagram.com/toshiki_harikyuu/?img_index=3'}
    >
      <Button
        _hover={{ filter: 'brightness(0.7)' }}
        backgroundImage={
          'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
        }
        borderColor={'white'}
        borderWidth={'1px'}
        colorScheme={'white'}
        leftIcon={<BsInstagram fontSize={'22px'} />}
        {...props}
      >
        Instagram
      </Button>
    </Link>
  )
}
