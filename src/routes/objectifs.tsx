import * as React from 'react'
import { Col,  Row } from 'antd'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import Styled from 'styled-components'
import { KeyboardArrowRight } from '@material-ui/icons'
import Audio from 'react-h5-audio-player'

const T = Styled(Typography)`
  margin-top: 0.3em !important;
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
  background-color: #ffd54f;
  padding-top: 6em;
  padding-bottom: 6em;
`

const AreaB = Styled(Row)`
  background-color: #ffecb3;
  padding-top: 6em;
  padding-bottom: 6em;
`

const IntroductionRoutes: React.SFC<any> = ()=> {
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
        <Row>
          <SubC />
          <MainC>
            <T variant='h2' component='h1'>Objectifs: 目標</T>
          </MainC>
          <SubC />
        </Row>

        <AreaA>
          <SubC />
          <MainC>
            <T variant='h3'>Vous devez :</T>
            <ul>
              <li><T variant='h5'>Naviguer dans l’activité</T></li>
              <li><T variant='h5'>Répondre correctement aux deux questionnaires</T></li>
              <li><T variant='h5'>Choisir un candidat et justifier votre choix (présentation orale)</T></li>
            </ul>
          </MainC>
          <SubC />
        </AreaA>

        <AreaB>
          <SubC />
          <MainC>
            <Row gutter={24}>
              <C spans={[ 24, 4 ]}></C>
              <C spans={[ 24, 16 ]}>
                <Typography variant='h5'>Pour vous aider, un ami vous a envoyé la transcription des vidéos. Malheureusement, la lettre qu’il vous a envoyé a été abimée !!</Typography>
                <Audio
                  src='../../assets/audio/obj1.mp3'
                  style={{ width: '100%', margin: '3em 0'}}
                />
              </C>
              <C spans={[ 24, 4 ]}></C>
            </Row>
          </MainC>
          <SubC />
        </AreaB>

        <AreaA>
          <SubC />
          <MainC>
            <Row gutter={24}>
              <C spans={[ 24, 4 ]}></C>
              <C spans={[ 24, 16 ]}>
                <Typography variant='h5' component='p'>
                  Dans votre malchance, vous avez eu de la chance : les phrases n’ont pas été coupées ! Elles sont simplement incomplètes, séparées, et d’autres textes y sont mélangés... Si vous arrivez à reconstituer le texte en regardant les vidéos, ces transcriptions vous aiderons sûrement !
                </Typography>
                <T variant='h5' component='p' style={{ textAlign: 'center' }}>(voir documents papiers)</T>
                <Audio
                  src='../../assets/audio/obj1.mp3'
                  style={{ width: '100%', margin: '3em 0'}}
                />
              </C>
              <C spans={[ 24, 4 ]}></C>
            </Row>
          </MainC>
          <SubC />
        </AreaA>

        <AreaB>
          <SubC />
          <MainC>
            <Row>
              {/* <Link to='/objectifs'> */}
              <Link to='/home'>
                <T variant='h4' component='p' style={{ textAlign: 'right', color: '#555' }}><span style={{ borderBottom: 'solid 3px #fff' }}>J’ai compris ! Accéder au bureau<KeyboardArrowRight /></span></T>
              </Link>
            </Row>
          </MainC>
          <SubC />
        </AreaB>
    </>
  )
}

export default IntroductionRoutes
