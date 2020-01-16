import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Icon, Row } from 'antd'
import { Typography } from '@material-ui/core'
import Styled from 'styled-components'
import RIL from 'react-image-lightbox'
import 'react-h5-audio-player/lib/styles.css';
import Audio from 'react-h5-audio-player'
import 'react-image-lightbox/style.css';

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
  background-color: #6d4c41;
  padding-top: 2em;
  padding-bottom: 2em;
`

const AreaB = Styled(Row)`
  background-color: #d7ccc8;
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
            <T variant='h3' component='h1'>Ecoutez 3 témoignages par téléphone</T>
          </MainC>
          <SubC />
        </Row>

        <AreaB>
          <SubC />
          <MainC>
            <Row gutter={12}>
              <C spans={[ 24, 24 ]}>
                <T variant='h3' component='h2'>Noémie</T>
              </C>
              <C spans={[ 24, 24 ]}>
                <Audio
                  src='../../assets/audio/noemie.mp3'
                  style={{ width: '100%' }}
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
                <T variant='h3' component='h2' style={{ color: '#fff'}}>Xavier</T>
              </C>
              <C spans={[ 24, 24 ]}>
                <Audio
                  src='../../assets/audio/xavier.mp3'
                  style={{ width: '100%' }}
                />
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
                <T variant='h3' component='h2'>Solange</T>
              </C>
              <C spans={[ 24, 24 ]}>
                <Audio
                  src='../../assets/audio/solange.mp3'
                  style={{ width: '100%' }}
                />
              </C>
            </Row>
          </MainC>
          <SubC />
        </AreaB>
    </>
  )
}

export default Projets
