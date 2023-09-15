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

export const MainVisualSection = ({ ...props }: BoxProps) => {
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
          delay: 12000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        followFinger={false}
        loopAdditionalSlides={2}
        modules={[Autoplay, Navigation]}
        slidesPerView={1.5}
        spaceBetween={15}
        speed={2000}
        onBeforeInit={onBeforeInit}
      >
        {MAIN_VISUAL_SLIDE_IMAGES.map((image, index) => (
          <SwiperSlide key={`swiper_slide_${index}`}>
            {({ isActive }) => (
              <AspectRatio
                h={{ base: '300px', lg: '450px', md: '350px' }}
                overflow={'hidden'}
                roundedBottom={4}
              >
                <Image
                  alt={'top_image'}
                  layout={'fill'}
                  objectFit={'cover'}
                  src={image}
                  transform={isActive ? 'scale(1.05)' : ''}
                  transitionDuration={'13s'}
                />
              </AspectRatio>
            )}
          </SwiperSlide>
        ))}
        <SliderNavigationButton left={'15%'} ref={prevRef}>
          <AiFillCaretLeft color={'white'} fontSize={'20px'} />
        </SliderNavigationButton>
        <SliderNavigationButton ref={nextRef} right={'15%'}>
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
      borderColor={'white'}
      borderRadius={'50%'}
      borderWidth={'1px'}
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
