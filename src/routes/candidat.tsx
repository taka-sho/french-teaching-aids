import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Icon, Row } from 'antd'
import { Typography } from '@material-ui/core'
import Styled from 'styled-components'

const T = Styled(Typography)`
  margin-top: 0.3em !important;
`

const Name: React.FC<{}> = ({ children }) => <T variant='h4' component='h2'>{children}</T>
const Politique: React.FC<{}> =  ({ children }) => <T variant='h5' component='p'>Camp politique : {children}</T>

const SubC = () => <Col xs={0} sm={0} md={0} lg={4} xl={4} xxl={4}></Col>

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

const MainC: React.FC<{}> = ({ children }) => <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>{children}</Col>

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
            <Row gutter={48}>
              <C spans={[ 24, 24 ]}>
                <Name>Laurent Wauquiez</Name>
                <Politique>Les Républicains</Politique>
              </C>
              <Row gutter={48}>
                <C spans={[ 24, 13 ]}>
                  <img style={{ width: '100%' }} src='../../assets/images/candidat/1.png' alt=""/>
                  <Typography variant='caption'>© Le Monde / LUDOVIC MARIN / AFP</Typography>
                  <img style={{ width: '100%' }} src='../../assets/images/candidat/2.png' alt=""/>
                  <C spans={[ 24, 24 ]}>
                    <T variant='h5' component='p'>Positionnement du parti :<strong>droite</strong></T>
                  </C>
                </C>
                <C spans={[ 0, 2 ]}></C>
                <C spans={[ 24, 8 ]}>
                <T variant='body1'>Les principales préoccupations du parti</T>
                  <img style={{ width: '100%' }} src='../../assets/images/candidat/l1.jpg' alt=""/>
                </C>
                <C spans={[ 0, 1 ]}></C>
              </Row>
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
            <Row gutter={48}>
              <C spans={[ 24, 24 ]}>
                <Name>Marine Le Pen</Name>
                <Politique>Rassemblement National<br/>(anciennement (jusqu’à 2018) : « Front National (FN) »)</Politique>
              </C>
              <Row gutter={48}>
                <C spans={[ 24, 13 ]}>
                  <img style={{ width: '100%' }} src='../../assets/images/candidat/3.png' alt=""/>
                  <Typography variant='caption'>© France 24/Dimitar Dilkoff, AFP</Typography>
                  <img style={{ width: '100%' }} src='../../assets/images/candidat/4.png' alt=""/>
                  <T variant='h5' component='p'>Positionnement du parti :<strong>extrême droite</strong></T>
                </C>
                <C spans={[ 0, 2 ]}></C>
                <C spans={[ 24, 8 ]}>
                  <T variant='body1'>Les principales préoccupations du parti</T>
                  <img style={{ width: '100%' }} src='../../assets/images/candidat/l2.jpg' alt=""/>
                </C>
                <C spans={[ 0, 1]}></C>
              </Row>
            </Row>
          </MainC>
          <SubC />
        </AreaB>

        <AreaA>
          <SubC />
          <MainC>
            <Row gutter={48}>
              <C spans={[ 24, 24 ]}>
              <Name>Emmanuel Macron</Name>
              <Politique>La République en marche</Politique>
              </C>
              <C spans={[ 24, 13 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/5.png' alt=""/>
                <Typography variant='caption'>© Europe1/Kenzo TRIBOUILLARD / AFP</Typography>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/6.png' alt=""/>
                <T variant='h5' component='p'>Positionnement du parti :<strong>extrême droite</strong></T>
              </C>
              <C spans={[ 0, 2 ]}></C>
              <C spans={[ 24, 8 ]}>
              <T variant='body1'>Les principales préoccupations du parti</T>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/l3.jpg' alt=""/>
              </C>
              <C spans={[ 0, 1 ]}></C>
            </Row>
          </MainC>
          <SubC />
        </AreaA>

        <AreaB>
          <SubC />
          <MainC>
            <Row gutter={48}>
              <C spans={[ 24, 24 ]}>
                <Name>Jean-Luc Mélenchon</Name>
                <Politique>La France insoumise</Politique>
              </C>
              <C spans={[ 24, 13 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/7.png' alt=""/>
                <Typography variant='caption'>© Europe1/Kenzo TRIBOUILLARD / AFP</Typography>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/8.png' alt=""/>
                <T variant='h5' component='p'>Positionnement du parti :<strong>extrême gauche</strong></T>
              </C>
              <C spans={[ 0, 2 ]}></C>
              <C spans={[ 24, 8 ]}>
              <T variant='body1'>Les principales préoccupations du parti</T>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/l4.jpg' alt=""/>
              </C>
              <C spans={[ 0, 1 ]}></C>
            </Row>
          </MainC>
          <SubC />
        </AreaB>

        <AreaA>
          <SubC />
          <MainC>
            <Row gutter={48}>
              <C spans={[ 24, 24 ]}>
                <Name>Olivier Faure</Name>
                <Politique>Parti Socialiste</Politique>
              </C>
              <C spans={[ 24, 13 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/9.png' alt=""/>
                <Typography variant='caption'>© Europe1/Kenzo TRIBOUILLARD / AFP</Typography>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/10.png' alt=""/>
                <T variant='h5' component='p'>Positionnement du parti :<strong>extrême gauche</strong></T>
              </C>
              <C spans={[ 0, 2 ]}></C>
              <C spans={[ 24, 8 ]}>
                <T variant='body1'>Les principales préoccupations du parti</T>
                <img style={{ width: '100%' }} src='../../assets/images/candidat/l5.jpg' alt=""/>
              </C>
              <C spans={[ 0, 1 ]}></C>
            </Row>
          </MainC>
          <SubC />
        </AreaA>
        <Row>
          <SubC />
          <MainC>
            <p><Button><Link to='/home'><Icon type='home'/></Link></Button></p>
          </MainC>
          <SubC />
        </Row>
    </>
  )
}

export default Projets
