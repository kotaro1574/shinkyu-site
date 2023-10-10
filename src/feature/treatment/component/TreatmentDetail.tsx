import { AspectRatio, Box, Divider, Grid } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { ReactNode } from 'react'

type Props = {
  description: ReactNode
  imagePath: string
  isOdd: boolean
  subTitle: string
  title: string
}

export const TreatmentDetail = ({
  description,
  imagePath,
  isOdd,
  subTitle,
  title,
}: Props) => {
  return (
    <Box position={{ md: 'relative' }}>
      <AspectRatio
        maxW={{ sm: '600px' }}
        ml={{ md: isOdd ? '0' : 'auto' }}
        overflow={'hidden'}
        ratio={6 / 3}
        rounded={4}
      >
        <Image
          alt={title}
          objectFit={'cover'}
          src={imagePath}
        />
      </AspectRatio>
      <Grid
        backdropFilter={'blur(3px)'}
        bg={'rgba(247,247,247,0.6)'}
        bottom={{ base: 5, md: 0 }}
        boxShadow={'base'}
        gap={2}
        left={{ md: isOdd ? '50%' : '0' }}
        maxW={{ base: '90%', md: '50%' }}
        ml={{ base: 'auto', md: 0 }}
        position={{ base: 'relative', md: 'absolute' }}
        px={10}
        py={5}
        rounded={4}
      >
        <Box fontSize={{ base: '2xl', md: '5xl' }} fontWeight={'medium'}>
          {title}
        </Box>
        <Box fontSize={{ base: '10px', md: 'xxs' }}>{subTitle}</Box>
        <Divider borderColor={'teal.300'} borderWidth={1} maxW={'150px'} />
        <Box fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
          {description}
        </Box>
      </Grid>
    </Box>
  )
}
