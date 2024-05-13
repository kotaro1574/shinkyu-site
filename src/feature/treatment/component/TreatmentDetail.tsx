import { AspectRatio, Box, chakra, Flex, Heading, Text } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { ReactNode } from 'react'

type Props = {
  advice: string
  description: ReactNode
  imagePath: string
  isOdd: boolean
  price: string
  time: string
  title: string
}

export const TreatmentDetail = ({
  advice,
  description,
  imagePath,
  isOdd,
  price,
  time,
  title,
}: Props) => {
  return (
    // <Box position={{ md: 'relative' }}>
    //   <AspectRatio
    //     maxW={{ sm: '600px' }}
    //     ml={{ md: isOdd ? '0' : 'auto' }}
    //     overflow={'hidden'}
    //     ratio={6 / 3}
    //     rounded={4}
    //   >
    //     <Image
    //       alt={title}
    //       layout={'fill'}
    //       objectFit={'cover'}
    //       src={imagePath}
    //     />
    //   </AspectRatio>
    //   <Box
    //     backdropFilter={'blur(3px)'}
    //     bg={'rgba(247,247,247,0.6)'}
    //     bottom={{ base: 5, md: 0 }}
    //     boxShadow={'base'}
    //     left={{ md: isOdd ? '50%' : '0' }}
    //     maxW={{ base: '90%', md: '50%' }}
    //     ml={{ base: 'auto', md: 0 }}
    //     position={{ base: 'relative', md: 'absolute' }}
    //     px={10}
    //     py={5}
    //     rounded={4}
    //   >
    //     <Heading
    //       _after={{
    //         bgColor: 'teal.300',
    //         bottom: 0,
    //         content: '""',
    //         display: 'inline-block',
    //         h: '2px',
    //         left: 0,
    //         position: 'absolute',
    //         w: '150px',
    //       }}
    //       as={'h3'}
    //       fontSize={{ base: '2xl', md: '5xl' }}
    //       fontWeight={'medium'}
    //       lineHeight={1}
    //       mb={3}
    //       pb={3}
    //       position={'relative'}
    //     >
    //       {title}
    //       <br />
    //       <chakra.span
    //         fontSize={{ base: '10px', md: 'xxs' }}
    //         fontWeight={'normal'}
    //       >
    //         {subTitle}
    //       </chakra.span>
    //     </Heading>
    //     <Text
    //       fontSize={{ base: 'md', md: 'lg' }}
    //       lineHeight={1.8}
    //       textAlign={'justify'}
    //     >
    //       {description}
    //     </Text>
    //     <Text>{price}</Text>
    //   </Box>
    // </Box>
    <Flex
      flexDirection={{ base: 'column', md: isOdd ? 'row-reverse' : 'row' }}
      justifyContent={'space-between'}
    >
      <Box w={{ base: '100%', md: '50%' }}>
        <AspectRatio height={{ base: '200px', md: '410px' }}>
          <Image
            alt={title}
            height={'100%'}
            layout={'fill'}
            objectFit={'cover'}
            src={imagePath}
          />
        </AspectRatio>
      </Box>

      <Box
        backdropFilter={'blur(3px)'}
        bg={{ base: 'rgba(247,247,247,0.6)', md: 'transparent ' }}
        boxShadow={{ base: 'base', md: 'none' }}
        maxW={{ base: '100%', md: '50%' }}
        mt={{ base: '-40px', md: 0 }}
        mx={{ base: 'auto', md: 0 }}
        position={{ base: 'relative', md: 'static' }}
        px={{ base: 8, md: 10 }}
        py={{ base: 5, md: 0 }}
        rounded={4}
        width={{ base: 'calc(100% - 20px)', md: '50%' }}
      >
        <Heading
          _after={{
            bgColor: 'teal.300',
            bottom: 0,
            content: '""',
            display: 'inline-block',
            h: '2px',
            left: 0,
            position: 'absolute',
            w: '100%',
          }}
          as={'h3'}
          fontSize={{ base: '2xl', md: '5xl' }}
          fontWeight={'medium'}
          lineHeight={1.5}
          mb={3}
          pb={3}
          position={'relative'}
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight={1.8}
          mb={4}
          textAlign={'justify'}
        >
          {description}
        </Text>
        <Text mb={8}>
          <chakra.span color={'teal.500'}>こんな方におすすめ</chakra.span>
          <br />
          {advice}
        </Text>
        <Text
          color={'teal.500'}
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight={'medium'}
        >
          {time} {price}
        </Text>
      </Box>
    </Flex>
  )
}
