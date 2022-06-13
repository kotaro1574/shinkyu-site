import { AspectRatio, Box, BoxProps } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { staticPath } from '@src/lib/$path'
import { motion } from 'framer-motion'

export const TopImage = () => {
  const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box)
  return (
    <Box position={'relative'}>
      <AspectRatio overflow={'hidden'} ratio={625 / 425} w={'full'}>
        <MotionBox
          animate={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            alt={'top_image'}
            layout={'fill'}
            src={staticPath.images.TopSlider.TopImage_JPG}
          />
        </MotionBox>
      </AspectRatio>
      <AspectRatio
        left={'50%'}
        m={'auto'}
        position={'absolute'}
        ratio={300 / 75}
        top={'50%'}
        transform={'translateY(-50%) translateX(-50%)'}
        w={'300px'}
        zIndex={999}
      >
        <MotionBox
          animate={{ opacity: 1, y: [50, 0] }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            alt={'top_title'}
            layout={'fill'}
            src={staticPath.natsumi.topImageText_svg}
          />
        </MotionBox>
      </AspectRatio>
    </Box>
  )
}
