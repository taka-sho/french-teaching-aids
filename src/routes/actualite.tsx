import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Icon, Row } from 'antd'
import { Typography } from '@material-ui/core'
import Styled from 'styled-components'
import RIL from 'react-image-lightbox'
import 'react-image-lightbox/style.css';
import Audio from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

const T = Styled(Typography)`
  margin-top: 0.3em !important;
  margin-bottom: 0.3em !important;
`

const SubC = () => <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={3}></Col>

const C: React.FC<{
  spans: number[]
}> = ({ children, spans }) => (
  <Col
    xs={spans[0]}
    sm={spans[0]}
    md={spans[0]}
    lg={spans[1]}
    xl={spans[1]}
    xxl={spans[1]}
    children={children}
  />
)

const MainC: React.FC<{}> = ({ children }) => <Col xs={24} sm={24} md={24} lg={8} xl={18} xxl={18}>{children}</Col>

const AreaA = Styled(Row)`
  background-color: #ddd;
  padding-top: 2em;
  padding-bottom: 2em;
`

const AreaB = Styled(Row)`
  background-color: #999;
  padding-top: 2em;
  padding-bottom: 2em;
`

const Projets: React.SFC<any> = () => {
  const [ RILOptions, setRILOptions ] = React.useState({ isOpen: false, mainSrc: '' })
  return (
    <>
      {
        RILOptions.isOpen &&
        <RIL
          mainSrc={RILOptions.mainSrc}
          onCloseRequest={() => setRILOptions({ ...RILOptions, isOpen: false })}
        />
      }
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: -1000,
        backgroundColor: '#e8eaf6'
      }} />
        <Row>
          <SubC />
          <MainC>
            <p><Button><Link to='/'><Icon type='home'/></Link></Button></p>
          </MainC>
          <SubC />
        </Row>

        <AreaA>
          <SubC />
          <MainC>
            <Row gutter={12}>
              <C spans={[ 24, 24 ]}>
                <T variant='h3' component='h1'>Les partis politiques (vidéo)</T>
              </C>
              <C spans={[ 24, 24 ]}>
                <video
                  src='../../assets/movies/les_partis_politiques.mp4'
                  style={{
                    width: '100%'
                  }}
                  controls
                />
              </C>
            </Row>
            <Row>
          </Row>
          </MainC>
          <SubC />
        </AreaA>

        <AreaB>
          <SubC />
          <MainC>
            <Row gutter={12}>
              <C spans={[ 24, 24 ]}>
                <T variant='h3' component='h1'>Les préoccupations des Français</T>
              </C>
              <C spans={[ 24, 12 ]}>
                <img
                  style={{ width: '100%', cursor: 'help' }}
                  src='../../assets/images/actualite/1.png'
                  alt=""
                  onClick={() => setRILOptions({ mainSrc: '../../assets/images/actualite/1.png', isOpen: true })}
                />
              </C>
              <C spans={[ 24, 12 ]}>
                <img
                  style={{ width: '100%', cursor: 'help' }}
                  src='../../assets/images/actualite/2.png'
                  alt=""
                  onClick={() => setRILOptions({ mainSrc: '../../assets/images/actualite/2.png', isOpen: true })}
                />
              </C>
            </Row>
            <Row>
          </Row>
          </MainC>
          <SubC />
        </AreaB>

        <AreaA>
          <SubC />
          <MainC>
            <Row gutter={12}  style={{ marginTop: 20 }}>
              <C spans={[ 24, 24 ]}>
                <T variant='h3' component='h1'>Les préoccupations des Français</T>
                <Audio
                  src='../../assets/audio/gauchedroite.mp3'
                  style={{ width: '100%', margin: '0.75em 0'}}
                />
              </C>
              <C spans={[ 24, 8 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/actualite/3.png' alt=""/>
              </C>
              <C spans={[ 24, 16 ]}>
                  <T variant='h6' component='p'>
                  En France, il y a deux grands camps politiques traditionnels : la gauche et la droite. Tous les deux souhaitent la prospérité de la France, mais d’une manière différente. On dit que la droite est plus libérale et individualiste, et la gauche plus solidaire et égalitaire.
Les partis politiques se positionnent en fonction de ces deux grandes forces. Il y a des partis de droite, de gauche, d’extrême-droite, d’extrême-gauche, ou ceux qu’on dit au centre.
                  </T>
              </C>
            </Row>
            <Row gutter={12} style={{ marginTop: 20 }}>
              <C spans={[ 24, 16 ]}>
                  <T variant='h6' component='p'>
                  Les termes de gauche et droite proviendrait de la place des membres de l’Assemblée à la Révolution française : les partisants du roi était assis à droite, les autres à gauche. Mais c’est véritablement au XXe siècle que s’est constitué le clivage gauche-droite.
                  </T>
              </C>
              <C spans={[ 24, 8 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/actualite/4.png' alt=""/>
                {/* <T variant='caption' component='p'>©︎france tv éducation, 1jour/1question</T> */}
              </C>
            </Row>
          </MainC>
          <SubC />
        </AreaA>
    </>
  )
}

export default Projets
