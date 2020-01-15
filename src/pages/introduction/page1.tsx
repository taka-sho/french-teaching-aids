import * as React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Avatar, Card, Typography, CardActionArea, CardMedia, CardContent, CardHeader, Link, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles({
  card: { maxWidth: 500, marginBottom: 20 },
  fromTwitter: { textAlign: 'right' },
  media: { height: 750 }
})

const Page1: React.SFC<any> = () => {
  const classes = useStyle()
  return (
    <>
      <Typography variant='h3' component='h1'>Le 15 avril 2019...<br/> un incendie détruit la flèche de Notre-Dame de Paris</Typography>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar src='./assets/images/introduction/hidalgo_face.jpg'></Avatar>}
          title='Annne Hidalgo'
          subheader='@Annne_Hidalgo'
        />
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Un tweet de Hidalgo'
            height='240'
            image='./assets/images/introduction/hidalgo_tweet.jpg'
            title='La maire de Paris'
          />
        </CardActionArea>
        <CardContent>
          <Typography variant='body1'>
            Je n'ai pas de mot assez fort pour exprimer la douleur que je ressens face à
            &nbsp;
            <Link
              href='https://twitter.com/hashtag/NotreDame?src=hashtag_click'
              target='_blank'
              rel='noopener'
            >
              #NotreDame
            </Link>
            &nbsp;
            ravagée par les flammes.
            Ce soir, tous les Parisiens et Français pleurent cet emblème de notre Histoire commune.
            De notre devise, nous tirerons la force de nous relever. Fluctuat nec mergitur.
          </Typography>
          <Link
            className={classes.fromTwitter}
            href='https://twitter.com/anne_hidalgo/status/1117868749644636160'
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
            image='./assets/images/introduction/news1.jpg'
            className={classes.media}
          />
        </CardActionArea>
      </Card>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Un tweet de Hidalgo'
            image='./assets/images/introduction/news2.jpg'
            className={classes.media}
          />
        </CardActionArea>
      </Card>
      <Button>
        <ReactLink to='/introduction/page2'>Continuer</ReactLink>
      </Button>
    </>
  )
}

export default Page1
