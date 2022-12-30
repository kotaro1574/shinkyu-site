import { AspectRatio, Box, Divider, Grid } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'

type Props = {
  description: string
  isOdd: boolean
  subTitle: string
  title: string
}

export const TreatmentDetail = ({
  description,
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
        ratio={5 / 3}
        rounded={2}
      >
        <Image
          alt={title}
          layout={'fill'}
          objectFit={'cover'}
          src={'https://source.unsplash.com/random'}
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
        <Box>{title}</Box>
        <Box>{subTitle}</Box>
        <Divider borderColor={'#21B5C1'} borderWidth={1} maxW={'150px'} />
        <Box lineHeight={1.7}>{description}</Box>
      </Grid>
    </Box>
  )
}
