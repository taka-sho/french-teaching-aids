import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Page1 from '../pages/introduction/page1'
import Page2 from '../pages/introduction/page2'
import Page3 from '../pages/introduction/page3'
import Page4 from '../pages/introduction/page4'
import Page5 from '../pages/introduction/page5'
import Page6 from '../pages/introduction/page6'
import Page7 from '../pages/introduction/page7'

const IntroductionRoutes: React.SFC<any> = (props)=> {
  const root = props.match.url
  return (
    <Switch>
      <Route exact={true} path={`${root}/page1`} component={Page1} />
      <Route exact={true} path={`${root}/page2`} component={Page2} />
      <Route exact={true} path={`${root}/page3`} component={Page3} />
      <Route exact={true} path={`${root}/page4`} component={Page4} />
      <Route exact={true} path={`${root}/page5`} component={Page5} />
      <Route exact={true} path={`${root}/page6`} component={Page6} />
      <Route exact={true} path={`${root}/page7`} component={Page7} />
    </Switch>
  )
}

export default IntroductionRoutes
