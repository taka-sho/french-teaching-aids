import * as React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import { Container } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import IntroductionRoutes from './introduction'
import CurrentEventsRoute from './currentEvents'
import Quiz from './quiz'
// import Projets from './projets'
// import Actuelite from './actualite(original)'
import Actuelite from './actualite'
import Home from '../pages/home'
import Candidat from './candidat'
import Témoignages from './témoignages'

const useStyles = makeStyles((theme: Theme) => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  main: { marginTop: theme.spacing(10), height: '200' }
}))

const IndexRoutes: React.SFC<{}> = ()=> {
  const classes = useStyles()
  return (
    <>
      {/* <AppBar>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Notre Dame
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container maxWidth='xl' className={classes.main} style={{ padding: 0 }}>
        <HashRouter>
          <Route exact={true} path='/introduction' component={IntroductionRoutes} />
          <Route exact={true} path='/currentEvents' component={CurrentEventsRoute} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/actuelite' component={Actuelite} />
          <Route path='/témoignages' component={Témoignages} />
          {/* <Route exact={true} path='/projets' component={Projets} /> */}
          <Route exact={true} path='/candidat' component={Candidat} />
          <Route exact={true} path='/' component={Home} />
        </HashRouter>
      </Container>
    </>
  )
}

export default IndexRoutes
