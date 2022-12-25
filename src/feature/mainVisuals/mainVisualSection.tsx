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
    <AspectRatio ratio={6 / 3}>
      <Swiper
        loop
        autoplay={{
          delay: 5000,
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
                src={image}
                transform={isActive ? 'scale(1.05)' : ''}
                transitionDuration={isActive ? '5s' : ''}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </AspectRatio>
  )
}
