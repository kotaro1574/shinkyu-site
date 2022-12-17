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
    <Box position={'relative'}>
      <AspectRatio
        h={'100%'}
        maxW={'600px'}
        ml={isOdd ? 'auto' : '0'}
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
        bottom={0}
        gap={2}
        left={isOdd ? '0' : '50%'}
        maxW={'50%'}
        position={'absolute'}
        px={10}
        py={5}
        rounded={2}
      >
        <Box>{title}</Box>
        <Box>{subTitle}</Box>
        <Divider borderColor={'#21B5C1'} maxW={'150px'} />
        <Box lineHeight={1.7}>{description}</Box>
      </Grid>
    </Box>
  )
}
