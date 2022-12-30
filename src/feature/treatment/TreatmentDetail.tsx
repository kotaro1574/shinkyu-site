import { AspectRatio, Box, Divider, Grid } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'

type Props = {
  description: string
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
        rounded={2}
      >
        <Image
          alt={title}
          layout={'fill'}
          objectFit={'cover'}
          src={imagePath}
        />
      </AspectRatio>
      <Grid
        bg={'rgba(247,247,247,0.8)'}
        bottom={{ base: 5, md: 0 }}
        gap={2}
        left={{ md: isOdd ? '50%' : '0' }}
        maxW={{ base: '90%', md: '50%' }}
        ml={{ base: 'auto', md: 0 }}
        position={{ base: 'relative', md: 'absolute' }}
        px={10}
        py={5}
        rounded={2}
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
