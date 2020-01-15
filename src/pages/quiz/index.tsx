import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'antd'

const IntroductionRoutes: React.SFC<any> = ()=> {
  return (
    <>
      <p><Button><Link to='/'><Icon type='home'/></Link></Button></p>
      <p><Link to='/quiz/comprehension'>Compréhension</Link></p>
      <p><Link to='/quiz/subjonctif'>Subjonctif</Link></p>
    </>
  )
}

export default IntroductionRoutes
