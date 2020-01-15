import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

const IntroductionRoutes: React.SFC<any> = (props)=> {
  const root = props.match.url
  return (
    <HashRouter>
      <Switch>
        <Route path={`${root}/page1`} component={() => (<p>Current events page1</p>)} />
        <Route path={`${root}/page2`} component={() => (<p>Current events page2</p>)} />
        <Route path={`${root}/page3`} component={() => (<p>Current events page3</p>)} />
      </Switch>
    </HashRouter>
  )
}

export default IntroductionRoutes
