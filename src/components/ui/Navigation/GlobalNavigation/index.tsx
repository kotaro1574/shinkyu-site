import { Button, Grid, GridProps } from '@chakra-ui/react'
import { LineIcon } from '@src/components/ui/Icon/LineIcon'

export const GlobalNavigation = ({ ...gridProps }: GridProps) => {
  return (
    <Grid as={'nav'} templateColumns={'repeat(2, 1fr)'} {...gridProps}>
      <Button bg={'#DBB025'} color={'white'} rounded={0}>
        電話で予約
      </Button>
      <Button
        bg={'green.500'}
        color={'white'}
        leftIcon={<LineIcon />}
        rounded={0}
      >
        Lineで予約
      </Button>
    </Grid>
  )
}
