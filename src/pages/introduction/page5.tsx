import * as React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
  ListItemText
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    multiline: {
      fontSize: '3em'
    },
    card: {
      display: 'flex'
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flex: '1 0 auto'
    },
    cover: {
      width: 151
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    }
  })
)

const Page5: React.SFC<any> = () => {
  const classes = useStyles()
  return (
    <>
      <Typography variant='h3' component='h1'>Objectifs</Typography>
      <Typography variant='body1' component='p'>目標</Typography>

      <Card>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          src='./assets/sounds/02.mp3'
          title='aaa'
        />
      </Card>

      <List>
        <ListItem>
          <ListItemText>Comprendre les documents écrits, vidéos et audios</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Choisir un projet</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Justifier votre choix</ListItemText>
        </ListItem>
      </List>
      <Button>
        <ReactLink to='/introduction/page6'>J’ai compris ! Continuer ☛</ReactLink>
      </Button>
    </>
  )
}

export default Page5
