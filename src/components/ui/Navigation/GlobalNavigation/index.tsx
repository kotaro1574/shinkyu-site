import { Button, Grid, GridProps } from '@chakra-ui/react'
import { LineIcon } from '@src/components/ui/Icon/LineIcon'
import { TelephoneIcon } from '@src/components/ui/Icon/TelephoneIcon'

export const GlobalNavigation = ({ ...gridProps }: GridProps) => {
  return (
    <Grid as={'nav'} templateColumns={'repeat(2, 1fr)'} {...gridProps}>
      <Button
        bg={'test.900'}
        color={'white'}
        leftIcon={<TelephoneIcon />}
        rounded={0}
      >
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
