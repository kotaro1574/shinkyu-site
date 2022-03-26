import { Icon, IconProps as ChakraIconProps } from '@chakra-ui/icon'
import { IconType } from 'react-icons'

type Props = {
  icon: IconType
} & ChakraIconProps

export type IconProps = Omit<Props, 'icon'>

export const BaseIcon = ({ icon, ...props }: Props) => {
  return <Icon as={icon} fontSize={'lg'} {...props} />
}
