import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Row, Col, Tabs } from 'antd'

import Page1 from '../pages/quiz/subjonctif'
import Page2 from '../pages/quiz/comprehension'

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

const IntroductionRoutes: React.SFC<any> = ()=> {
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: -1500,
        backgroundColor: '#e8f5e9'
      }} />
      <Row>
        <C spans={[0, 4]}></C>
        <C spans={[ 24, 16]}>
        <p><Button><Link to='/home'><Icon type='home'/></Link></Button></p>
        <Tabs defaultActiveKey='1' type='line'>
          <Tabs.TabPane key='1' tab='Subjonctif'><Page1/></Tabs.TabPane>
          <Tabs.TabPane key='2' tab='Compréhension'><Page2/></Tabs.TabPane>
        </Tabs>
        </C>
        <C spans={[0, 4]}></C>
      </Row>
    </>
  )
}

export default IntroductionRoutes
