import {
  AspectRatio,
  Box,
  BoxProps,
  Grid,
  Heading,
  Text,
} from '@chakra-ui/react'
import { Title } from '@src/components/ui/Heading/Title'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'

export const PractitionerIntroduction = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Title>施術者のご紹介</Title>
      <AspectRatio
        mt={6}
        mx={'auto'}
        overflow={'hidden'}
        ratio={16 / 8}
        rounded={'sm'}
      >
        <Image
          alt={'top_image'}
          layout={'fill'}
          src={staticPath.natsumi.practitioner_jpg}
        />
      </AspectRatio>
      <Grid gap={2} mt={2}>
        <Heading fontSize={'lg'} textAlign={'center'}>
          院長 繁内俊輝
        </Heading>
        <Text fontSize={'sm'} textAlign={'left'}>
          世の中にはたくさんの治療法があります。一人一人によって合う治療法は異なると思います。
          鍼をして治すことが最重要ではなく、どのような治療法でも皆さまの症状が改善することが最重要です。
          まずは問診・全身の状態を把握させていただき、皆さま一人一人の体に合った施術を提供させていただきます。
        </Text>
      </Grid>
    </Box>
  )
}
