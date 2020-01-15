import * as React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Link
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  card: { maxWidth: 500, marginBottom: 20 },
  fromTwitter: { textAlign: 'right' },
  media: { height: 650 }
})

const Page2: React.SFC<any> = () => {
  const classes = useStyle()
  return (
    <>
      <Typography variant='h3' component='h1'>Le monde entier réagit.</Typography>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar src='./assets/images/introduction/page2/obama_face.jpg'></Avatar>}
          title='Barack Obama'
          subheader='@BarackObama'
        />
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Un tweet de Hidalgo'
            height='240'
            image='./assets/images/introduction/page2/obama_tweet.jpg'
            title='La maire de Paris'
          />
        </CardActionArea>
        <CardContent>
          <Typography variant='body1'>
            Notre Dame is one of the world’s great treasures, and we’re thinking of the people of France in your time of grief. It’s in our nature to mourn when we see history lost – but it’s also in our nature to rebuild for tomorrow, as strong as we can.
          </Typography>
          <Link
            className={classes.fromTwitter}
            href='https://twitter.com/barackobama/status/1117886698568830976'
            color='textSecondary'
            target='_blank'
            rel='noopener'
          >
            de Twitter
          </Link>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar src='./assets/images/introduction/page2/trump_face.jpg'></Avatar>}
          title='Donald J. Trump'
          subheader='@realDonaldTrump'
        />
        <CardContent>
          <Typography variant='body1'>
            So horrible to watch the massive fire at Notre Dame Cathedral in Paris. Perhaps flying water tankers could be used to put it out. Must act quickly!
          </Typography>
          <Link
            className={classes.fromTwitter}
            href='https://twitter.com/realdonaldtrump/status/1117844987293487104'
            color='textSecondary'
            target='_blank'
            rel='noopener'
          >
            de Twitter
          </Link>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Un tweet de Hidalgo'
            image='./assets/images/introduction/page2/news1.png'
            className={classes.media}
          />
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Un tweet de Hidalgo'
            image='./assets/images/introduction/page2/news2.png'
            className={classes.media}
          />
        </CardActionArea>
      </Card>

      <Button>
        <ReactLink to='/introduction/page3'>Continuer</ReactLink>
      </Button>
    </>
  )
}

export default Page2
