import { Box, Flex, Spacer } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex bg={'#D8C176'}>
      <Box>ロゴ</Box>
      <Spacer />
      <Box>メニュー</Box>
    </Flex>
  )
}
