import * as React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import {
  Button,
  Typography
} from '@material-ui/core'

const Page3: React.SFC<any> = () => {
  return (
    <>
      <Typography variant='h3' component='h1'>Les flammes maintenant éteintes, il faut penser à rebâtir.</Typography>
      <Typography variant='body1' component='p'>炎が消えた今、どのように作り直すかを考える時が来た。</Typography>
      <img src='./assets/images/introduction/page3/notredame.jpg' />
      <Button>
        <ReactLink to='/introduction/page4'>Continuer</ReactLink>
      </Button>
    </>
  )
}

export default Page3
