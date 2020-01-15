import * as React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Button, Icon } from 'antd'

import Page1 from '../pages/quiz/subjonctif'
import Page2 from '../pages/quiz/comprehension'

const IntroductionRoutes: React.SFC<any> = (props)=> {
  const root = props.match.url
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: -1500,
        backgroundColor: '#e8f5e9'
      }} />
      <p><Button><Link to='/'><Icon type='home'/></Link></Button></p>
      <p><Link to='/quiz/comprehension'>Compréhension</Link></p>
      <p><Link to='/quiz/subjonctif'>Subjonctif</Link></p>
      <Switch>
        <Route exact={true} path={`${root}/subjonctif`} component={Page1} />
        <Route exact={true} path={`${root}/comprehension`} component={Page2} />
      </Switch>
    </>
  )
}

export default IntroductionRoutes
