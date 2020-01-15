import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Icon, Row } from 'antd'
import { Typography as T } from '@material-ui/core'
import Styled from 'styled-components'

const video = require('../../assets/movies/projets.mp4')

const Typography = Styled(T)`
  margin-top: 0.3em !important;
`

const Projets: React.SFC<any> = () => {
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: -1000,
        backgroundColor: '#e8eaf6'
      }} />
      <p><Button><Link to='/'><Icon type='home'/></Link></Button></p>
      <Typography variant='h2' component='h1'>Appel à projets lancé</Typography>
      <video
        src={video}
        controls
      />

      <Typography variant='h2' component='h1' style={{ marginTop: '1em' }}>Les projets envisagés</Typography>
      <div style={{ marginLeft: '1em', marginBottom: '2em', borderLeft: 'solid 3px #eee', paddingLeft: '1em' }}>

        <Typography variant='h3' style={{ paddingTop: '1em' }}>Reconstruction du toit en bois, sans la flèche.</Typography>
        <div style={{ marginLeft: '3em' }}>
          <Typography variant='h4' component='p'>Fin des travaux : 2024<br/>Coût : 15 millions d’Euros</Typography>
          <Typography variant='h5' component='p'>Beaucoup de spécialistes du patrimoine appellent à la prudence. La cathédrale est un monument historique qui doit être préservé et non transformé.</Typography>
          <img src='../../assets/images/projets/1.png' style={{ width: '100%' }} />
        </div>

        <Typography variant='h3' style={{ paddingTop: '1em' }}>Une flèche en acier et un toit en verre.</Typography>
        <div style={{ marginLeft: '3em' }}>
          <Typography variant='h4' component='p'>Fin des travaux : 2030<br/>Coût : 40 millions d’Euros</Typography>
          <Typography variant='h5' component='p'>Une restauration qui exprime le savoir-faire de l’époque contemporaine. Du toit rendu accessible, le public peut contempler Paris.</Typography>
          <Row gutter={12}>
            <Col span={12}>
              <img src='../../assets/images/projets/2.png' style={{ width: '100%' }} />
            </Col>
            <Col span={12}>
              <img src='../../assets/images/projets/3.png' style={{ width: '100%' }} />
            </Col>
          </Row>
        </div>

        <Typography variant='h3' style={{ paddingTop: '1em' }}>Une verrière en vitraux à l’effigie de Mbappé. Allez les Bleus !</Typography>
        <div style={{ marginLeft: '3em' }}>
          <Typography variant='h4' component='p'>Fin des travaux : 2030<br/>Coût : 60 millions d’Euros</Typography>
          <Row gutter={12}>
            <Col span={12}>
              <Typography variant='h5' component='p'>Qui d’autre que Kylian Mbappé surnommé « la flèche » pour coiffer le chœur de Notre-Dame ? </Typography>
            </Col>
            <Col span={12}>
              <img src='../../assets/images/projets/4.png' style={{ width: '100%' }} />
            </Col>
          </Row>
        </div>

        <Typography variant='h3' style={{ paddingTop: '1em' }}>Un toit terrasse végétalisé</Typography>
        <div style={{ marginLeft: '3em' }}>
          <Typography variant='h4' component='p'>Fin des travaux : 2025<br/>Coût : 15 millions d’Euros</Typography>
          <Row gutter={12}>
            <Col span={9}>
              <img src='../../assets/images/projets/5.png' style={{ width: '100%' }} />
            </Col>
            <Col span={15}>
              <Typography variant='h5' component='p'>Ecologique et économique, un toit végétalisé est une alternative qui s’inscrit résolument dans l’avenir.</Typography> 
            </Col>
          </Row>
        </div>

        <Typography variant='h3' style={{ paddingTop: '1em' }}>Reconstruction à l’identique</Typography>
        <div style={{ marginLeft: '3em' }}>
          <Typography variant='h4' component='p'>Fin des travaux : 2030<br/>Coût : 50 millions d’Euros</Typography>
          <Row gutter={12}>
            <Col span={15}>
              <Typography variant='h5' component='p'>Une grande part de la population souhaite que la cathédrale retrouve le même visage qu’elle avait avant l’incendie.</Typography> 
            </Col>
            <Col span={9}>
              <img src='../../assets/images/projets/6.png' style={{ width: '100%' }} />
            </Col>
          </Row>
        </div>

        <Typography variant='h3' style={{ paddingTop: '1em' }}>Une flèche de lumière</Typography>
        <div style={{ marginLeft: '3em' }}>
          <Typography variant='h4' component='p'>Fin des travaux : 2024<br/>Coût : 15 millions d’Euros <br/>(hors coût énergétique)</Typography>
          <Row gutter={12}>
            <Col span={9}>
              <img src='../../assets/images/projets/7.png' style={{ width: '100%' }} />
            </Col>
            <Col span={15}>
              <Typography variant='h5' component='p'>Un faisceau lumineux s’élevant dans le ciel en guise de flèche.</Typography> 
            </Col>
          </Row>
        </div>
      </div>
      <p><Button><Link to='/'><Icon type='home'/></Link></Button></p>
    </>
  )
}

export default Projets
