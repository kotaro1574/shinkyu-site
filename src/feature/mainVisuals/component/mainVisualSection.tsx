// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'

import { AspectRatio, BoxProps } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { MAIN_VISUAL_SLIDE_IMAGES } from '@src/feature/mainVisuals/constant'
import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = BoxProps

export const MainVisualSection = ({ ...props }: Props) => {
  return (
    <AspectRatio h={'600px'} {...props}>
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
              <Image
                alt={'top_image'}
                layout={'fill'}
                objectFit={'cover'}
                src={image}
                transform={isActive ? 'scale(1.05)' : ''}
                transitionDuration={'7s'}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </AspectRatio>
  )
}
