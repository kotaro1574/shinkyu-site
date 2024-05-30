'use client'
/* eslint-disable @typescript-eslint/naming-convention */
// Import Swiper stles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import { AspectRatio, Box, BoxProps, Center, FlexProps } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { MAIN_VISUAL_SLIDE_IMAGES } from '@src/feature/mainVisuals/constant'
import { forwardRef, useRef } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import type SwiperCore from 'swiper'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function MainVisualSection({ ...props }: BoxProps) {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation
      if (!navigation) return
      navigation.prevEl = prevRef.current
      navigation.nextEl = nextRef.current
    }
  }

  return (
    <Box {...props}>
      <Swiper
        centeredSlides
        loop
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1.1,
            spaceBetween: 12,
          },
          768: {
            followFinger: false,
            slidesPerView: 1.3,
            spaceBetween: 12,
          },
          992: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
        }}
        loopAdditionalSlides={2}
        modules={[Autoplay, Navigation]}
        speed={2000}
        onBeforeInit={onBeforeInit}
      >
        {MAIN_VISUAL_SLIDE_IMAGES.map((image, index) => (
          <SwiperSlide key={`swiper_slide_${index}`}>
            {({ isActive }) => (
              <AspectRatio
                h={{ base: '300px', lg: '450px', md: '350px' }}
                overflow={'hidden'}
                roundedBottom={{ sm: 4 }}
              >
                <Image
                  fill
                  alt={'top_image'}
                  sizes={'100%'}
                  src={image}
                  style={{
                    objectFit: 'cover',
                    transform: isActive ? 'scale(1.05)' : '',
                    transitionDuration: '10s',
                  }}
                />
              </AspectRatio>
            )}
          </SwiperSlide>
        ))}
        <SliderNavigationButton
          display={{ base: 'none', md: 'flex' }}
          left={{ lg: '15%', md: '8%' }}
          ref={prevRef}
        >
          <AiFillCaretLeft color={'white'} fontSize={'20px'} />
        </SliderNavigationButton>
        <SliderNavigationButton
          display={{ base: 'none', md: 'flex' }}
          ref={nextRef}
          right={{ lg: '15%', md: '8%' }}
        >
          <AiFillCaretRight color={'white'} fontSize={'20px'} />
        </SliderNavigationButton>
      </Swiper>
    </Box>
  )
}

const SliderNavigationButton = forwardRef<HTMLDivElement, FlexProps>(
  (props, ref) => (
    <Center
      _hover={{
        bg: 'rgba(79, 209, 197, 0.5)',
        height: '52px',
        width: '52px',
      }}
      backdropFilter={'blur(3px)'}
      backgroundColor={'rgba(56, 178, 172, 0.5)'}
      borderRadius={'50%'}
      boxShadow={'base'}
      cursor={'pointer'}
      height={'48px'}
      overflow={'hidden'}
      position={'absolute'}
      ref={ref}
      top={'50%'}
      transform={'translateY(-50%)'}
      transition={'0.2s'}
      width={'48px'}
      zIndex={1}
      {...props}
    />
  )
)
