import { AspectRatio, Box, Flex, Heading } from '@chakra-ui/react'
import { Image } from '@src/components/ui/Image'
import { ReactNode } from 'react'

type Props = {
  advice: ReactNode
  description: ReactNode
  imagePath: string
  isOdd: boolean
  title: string
}

export const TreatmentDetail = ({
  advice,
  description,
  imagePath,
  isOdd,
  title,
}: Props) => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: isOdd ? 'row-reverse' : 'row' }}
      justifyContent={'space-between'}
    >
      <Box w={{ base: '100%', md: '50%' }}>
        <AspectRatio height={{ base: '200px', md: '410px', sm: '300px' }}>
          <Image
            fill
            alt={title}
            sizes={'100%'}
            src={imagePath}
            style={{
              borderRadius: '4px',
              objectFit: 'cover',
            }}
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
        px={{ base: 8, md: 0 }}
        py={{ base: 5, md: 0 }}
        rounded={4}
        width={{ base: 'calc(100% - 20px)', md: '45%' }}
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
          lineHeight={1.5}
          mb={3}
          pb={3}
          position={'relative'}
        >
          {title}
        </Heading>
        <Box
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight={1.8}
          mb={6}
          textAlign={'justify'}
        >
          {description}
        </Box>
        <Box mb={6}>{advice}</Box>
      </Box>
    </Flex>
  )
}
