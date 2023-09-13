// Import Swiper stles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'

import { Box, BoxProps, Heading } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { MAIN_VISUAL_SLIDE_IMAGES } from '@src/feature/mainVisuals/constant'
import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = BoxProps

export const MainVisualSection = ({ ...props }: Props) => (
  <Box position={'relative'} {...props}>
    <Swiper
      loop
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
        waitForTransition: false,
      }}
      effect={'fade'}
      fadeEffect={{ crossFade: true }}
      followFinger={false}
      loopAdditionalSlides={1}
      modules={[EffectFade, Autoplay]}
      speed={2000}
    >
      {MAIN_VISUAL_SLIDE_IMAGES.map((image, index) => (
        <SwiperSlide key={`swiper_slide_${index}`}>
          {({ isActive }) => (
            <Box h={'600px'}>
              <Image
                alt={'top_image'}
                layout={'fill'}
                objectFit={'cover'}
                src={image}
                transform={isActive ? 'scale(1.05)' : ''}
                transitionDuration={'7s'}
              />
            </Box>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
    <Heading
      color={'white'}
      fontSize={{ base: '2xl', md: '6xl', sm: '4xl', lg: '7xl' }}
      lineHeight={2}
      position={'absolute'}
      right={5}
      textAlign={'center'}
      textShadow={'4px 4px 4px rgba(0, 0, 0, 0.3)'}
      top={40}
      zIndex={1}
    >
      よりよい生活が送れるように
      <br />
      患者様
      <Box as={'span'} color={'teal.400'}>
        ひとりひとり
      </Box>
      に適した
      <br />
      サービスを提供する
    </Heading>
  </Box>
)
