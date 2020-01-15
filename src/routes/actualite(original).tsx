import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Icon, Row } from 'antd'
import { Typography as T } from '@material-ui/core'
import Styled from 'styled-components'

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
        backgroundColor: '#cfd8dc'
      }} />
      <p><Button><Link to='/'><Icon type='home'/></Link></Button></p>
      <Typography variant='h2' component='h1' style={{ marginTop: '1em' }}>La cathédrale ravagée par les flammes !</Typography>
      {/* <video
        src={video1}
        controls
      /> */}

      <Typography variant='h2' component='h1' style={{ marginTop: '1em' }}>Le discours d’Emmanuel Macron</Typography>
      <Typography variant='caption' component='p' >©L’Obs/Présidence de la République</Typography>
      {/* <video
        src={video2}
        controls
      /> */}

      <Typography variant='h2' component='h1' style={{ marginTop: '1em' }}>Notre-Dame en contexte</Typography>
      <div style={{ marginLeft: '2em' }}>
        <Row gutter={12}>
          <Col span={24}>
            <Col span={8}>
              <img src='../../assets/images/actualite/1.png' width='100%' alt=""/>
            </Col>
            <Col span={16}>
              <Typography variant='h5' component='p'>La cathédrale Notre-Dame de Paris a été bâtie entre le XIIe et le XIVe siècle, sur une ancienne basilique datant d’avant le VIIe siècle, et peut-être un temple païen encore antérieur. Napoléon y fut sacré Empereur en 1804.Comme tous les édifices religieux, elle est saccagée à la Révolution puis délaissée. Grâce au roman de Victor Hugo (1831), le public se réintéresse à la cathédrale éponyme. Entre 1844 et 1864, l’architecte Viollet-le-Duc la restaure selon son goût. Il crée notamment la nouvelle flèche, malheureusement détruite par l’incendie de 2019. </Typography>
            </Col>
          </Col>
          <Col span={16}>
            <Typography variant='h5' component='p'>En 2024, Paris accueillera les Jeux Olympiques, pour la troisième fois de son Histoire. Le logo rappelle à la fois la tour Eiffel, et les chiffres 2 et 4, par référence à l’année où se dérouleront les J.O. Les jeux de Paris précédents avaient eu lieu en 1924.</Typography>
          </Col>
          <Col span={8}>
            <img src='../../assets/images/actualite/2.png' width='100%' alt='' />
          </Col>
        </Row>
      </div>


      <p><Button><Link to='/'><Icon type='home'/></Link></Button></p>
    </>
  )
}

export default Projets
