// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'

import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { MAIN_VISUAL_SLIDE_IMAGES } from '@src/constants/mainVisual'
import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export const MainVisualSection = () => {
  return (
    <AspectRatio h={{ base: '410px', md: '800px' }} ratio={4 / 3}>
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
