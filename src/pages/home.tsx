import * as React from 'react'
import * as ReactCookie from 'react-cookie'
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd'

import {
  Typography,
} from '@material-ui/core'



const Home: React.SFC<{}> = () => {
  const [
    cookies,
    setCookies
  ] = ReactCookie.useCookies([ 'comprehension', 'subjonctifStatus' ])
  if (!cookies.comprehension) {
    setCookies('comprehension', { q1: false, q2: false, q3: false, q4: false, q5: false, q6: false, })
  }
  if (!cookies.subjonctifStatus) {
    setCookies('subjonctifStatus', { q1: false, q2: false, q3: false, q4: false, q5: false, q6: false, })
  }

  const [ status ] = ReactCookie.useCookies([ 'comprehension', 'subjonctif' ])
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

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: -1000
      }}>
        <img src='../../assets/images/home/back.png' width='100%' />
      </div>
      <div>
        <Typography variant='h2' style={{ color: '#555'}}>{Object.keys(status.comprehension).filter(key => status.comprehension[key]).length === 5 ? 'C ✅' : ''}</Typography>
        <Typography variant='h2' style={{ color: '#555'}}>{Object.keys(status.subjonctifStatus).filter(key => status.subjonctifStatus[key]).length === 6 ? 'S ✅' : ''}</Typography>
      </div>
      <Row style={{
        position: 'fixed',
        bottom: '3em',
        left: "5em",
        width: '100%',
        height: 450
      }}>
        <C spans={[ 24, 8 ]}>
          <Link to='/candidat'>
            <img src='../../assets/images/home/1.png' height='300' style={{ marginTop: 150 }} alt='' />
          </Link>
        </C>
        <C spans={[ 24, 8 ]}>
          <Link to='/actuelite'>
            <img src='../../assets/images/home/2.png' height='300' alt='' />
          </Link>
        </C>
        <C spans={[ 24, 8 ]}>
          <Link to='/quiz'>
            <img src='../../assets/images/home/test.png' height='300' style={{ marginTop: 150 }} alt='' />
          </Link>
        </C>
      </Row>
    </>
  )
}

export default Home
