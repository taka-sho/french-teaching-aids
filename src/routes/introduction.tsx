import * as React from 'react'
import { Col,  Row } from 'antd'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import Styled from 'styled-components'
import { KeyboardArrowRight } from '@material-ui/icons'

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
  background-color: #e57373;
  padding-top: 6em;
  padding-bottom: 6em;
`

const AreaB = Styled(Row)`
  background-color: #9fa8da;
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
            <T variant='h2' component='h1'>Introduction</T>
          </MainC>
          <SubC />
        </Row>

        <AreaA>
          <SubC />
          <MainC>
            <Row gutter={24}>
              <C spans={[ 24, 6 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/introduction/2.png' alt=""/>
              </C>
              <C spans={[ 24, 18 ]}>
                <T variant='h5' component='p'>
                  En France, les élections présidentielles ont lieu tous les 5 ans.Le président actuel, Emmanuel Macron, a été élu au printemps 2017.<br/>
                  <img src='../../assets/images/introduction/1.png' alt=""/>
                </T>
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
            <Row gutter={24}>
              <C spans={[ 24, 4 ]}></C>
              <C spans={[ 24, 16 ]}>
                <Typography variant='h5'>Les élections présidentielles comprennent 2 tours. Les deux candidats du second tour sont ceux qui ont obtenu le plus de votes au premier tour, parmi tous les candidats.</Typography>
              </C>
              <C spans={[ 24, 4 ]}></C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%', marginTop: '2em' }} src='../../assets/images/introduction/4.png' alt=""/>
                <T variant='body1' component='p'>Résultats du premier tour</T>
              </C>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%', marginTop: '2em' }} src='../../assets/images/introduction/5.png' alt=""/>
                <T variant='body1' component='p'>Résultats du second tour</T>
              </C>
            </Row>
          </MainC>
          <SubC />
        </AreaB>

        <AreaA>
          <SubC />
          <MainC>
            <Row gutter={24}>
              <C spans={[ 24, 12 ]}>
                <img style={{ width: '100%' }} src='../../assets/images/introduction/6.png' alt=""/>
              </C>
              <C spans={[ 24, 12 ]}>
                <Typography variant='h5' component='p'>Les prochaines élections présidentielles auront lieu au printemps 2022.</Typography>
              </C>
            </Row>
          </MainC>
          <SubC />
        </AreaA>

        <AreaB>
          <SubC />
          <MainC>
            <Row>
              <Link to='/objectifs'>
                <T variant='h3' component='p' style={{ textAlign: 'right', color: '#fff' }}>Continuer<KeyboardArrowRight /></T>
              </Link>
            </Row>
          </MainC>
          <SubC />
        </AreaB>
    </>
  )
}

export default IntroductionRoutes
