import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Icon, Row } from 'antd'
import { Typography } from '@material-ui/core'
import Styled from 'styled-components'

const T = Styled(Typography)`
  margin-top: 0.3em !important;
`

const Name: React.FC<{}> = ({ children }) => <T variant='h4' component='h2'>{children}</T>
const Politique: React.FC<{}> =  ({ children }) => <T variant='h5' component='p'>Parti politique : {children}</T>

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
  background-color: #ffcdd2;
  padding-top: 2em;
  padding-bottom: 2em;
`

const AreaB = Styled(Row)`
  background-color: #e8eaf6;
  padding-top: 2em;
  padding-bottom: 2em;
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
        <Row>
          <SubC />
          <MainC>
            <p><Button><Link to='/home'><Icon type='home'/></Link></Button></p>
            <T variant='h2' component='h1'>Les candidat.e.s.</T>
          </MainC>
          <SubC />
        </Row>

        <AreaA>
          <SubC />
          <MainC>
            <Row gutter={12}>
              <C spans={[ 24, 24 ]}>
                <Name>Laurent Wauquiez</Name>
                <Politique>Les Républicains</Politique>
              </C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/1.png' alt=""/>
              </C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/2.png' alt=""/>
                <Typography variant='caption'>© Le Monde / LUDOVIC MARIN / AFP</Typography>
              </C>
              <C spans={[ 24, 24 ]}>
                <T variant='h5' component='p'>Positionnement du parti :<strong>droite</strong></T>
              </C>
            </Row>
            <Row>
            <SubC />
            <SubC />
          </Row>
          </MainC>
          <SubC />
        </AreaA>

        <AreaB>
          <SubC />
          <MainC>
            <Row gutter={12}>
              <C spans={[ 24, 24 ]}>
                <Name>Marine Le Pen</Name>
                <Politique>Rassemblement National<br/>(anciennement (jusqu’à 2018) : « Front National (FN) »)</Politique>
              </C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/3.png' alt=""/>
              </C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/4.png' alt=""/>
                <Typography variant='caption'>© France 24/Dimitar Dilkoff, AFP</Typography>
              </C>
              <C spans={[ 24, 24 ]}>
                <T variant='h5' component='p'>Positionnement du parti :<strong>extrême droite</strong></T>
              </C>
            </Row>
          </MainC>
          <SubC />
        </AreaB>

        <AreaA>
          <SubC />
          <MainC>
            <Row gutter={12}>
              <C spans={[ 24, 24 ]}>
              <Name>Emmanuel Macron</Name>
              <Politique>La République en marche</Politique>
              </C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/5.png' alt=""/>
              </C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/6.png' alt=""/>
                <Typography variant='caption'>© Europe1/Kenzo TRIBOUILLARD / AFP</Typography>
              </C>
              <C spans={[ 24, 24 ]}>
                <T variant='h5' component='p'>Positionnement du parti :<strong>extrême droite</strong></T>
              </C>
            </Row>
          </MainC>
          <SubC />
        </AreaA>

        <AreaB>
          <SubC />
          <MainC>
            <Row gutter={12}>
              <C spans={[ 24, 24 ]}>
                <Name>Jean-Luc Mélenchon</Name>
                <Politique>La France insoumise</Politique>
              </C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/7.png' alt=""/>
              </C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/8.png' alt=""/>
                <Typography variant='caption'>© Europe1/Kenzo TRIBOUILLARD / AFP</Typography>
              </C>
              <C spans={[ 24, 24 ]}>
                <T variant='h5' component='p'>Positionnement du parti :<strong>extrême gauche</strong></T>
              </C>
            </Row>
          </MainC>
          <SubC />
        </AreaB>

        <AreaA>
          <SubC />
          <MainC>
            <Row gutter={12}>
              <C spans={[ 24, 24 ]}>
                <Name>Olivier Faure</Name>
                <Politique>Parti Socialiste</Politique>
              </C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/9.png' alt=""/>
              </C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/10.png' alt=""/>
                <Typography variant='caption'>© Europe1/Kenzo TRIBOUILLARD / AFP</Typography>
              </C>
              <C spans={[ 24, 24 ]}>
                <T variant='h5' component='p'>Positionnement du parti :<strong>extrême gauche</strong></T>
              </C>
            </Row>
          </MainC>
          <SubC />
        </AreaA>
    </>
  )
}

export default Projets
