import * as React from 'react'
import { Button, Modal, Radio } from 'antd'
import Styled from 'styled-components'
import * as ReactCookie from 'react-cookie'
import { Typography } from '@material-ui/core'

const VerifierButton = Styled(Button)`
  margin-left: 1em;
`

const RadioGroup = Styled(Radio.Group)`
  margin-left: 2em;
`

const Comporehension: React.SFC<any> = () => {
  const [
    answer,
    setAnswer
  ] = React.useState({ q1: null, q2: null, q3: null, q4: null, q5: null, q6: null })
  const [
    status,
    setStatus
  ] = ReactCookie.useCookies([ 'comprehension' ])

  const [
    modalInfo,
    setModalInfo
  ] = React.useState({ title: '', content: '', visible: false })

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: -1000,
        backgroundColor: '#b2dfdb'
      }} />
      {/* <Button
        onClick={() => setStatus('comprehension', { q1: false, q2: false, q3: false, q4: false, q5: false, q6: false, })}
      >reset</Button> */}
      <Modal
        title={modalInfo.title}
        visible={modalInfo.visible}
        onOk={() => setModalInfo({ ...modalInfo, visible: false })}
        onCancel={() => setModalInfo({ ...modalInfo, visible: false })}
      >
        {modalInfo.content}
      </Modal>

      <Typography variant='h2'>
        Compréhension
        {Object.keys(status.comprehension).filter(key => status.comprehension[key]).length === 5 ? '✅' : ''}
      </Typography>
      <div style={{ marginLeft: '1em' }}>
        <h3>1. Quelle est la principale préoccupation des gens de droite? {status.comprehension.q1 ? '✅': ''}</h3>
        {
          !status.comprehension.q1 ? (
            <p>
              <RadioGroup value={answer.q1} onChange={(e) => setAnswer({ ...answer, q1: e.target.value})}>
                <Radio value={1}>Le contrôle de l'immigration</Radio>
                <Radio value={2}>Les impôrts et les taxes</Radio>
              </RadioGroup>
              <VerifierButton
                type='primary'
                onClick={() => {
                  if (answer.q1 === 1) {
                    setModalInfo({ title: 'question1', content: 'ok', visible: true })
                    setStatus('comprehension', { ...status.comprehension, q1: true })
                  } else {
                    setModalInfo({ title: 'question1', content: 'non', visible: true })
                  }
                }}
              >Vérifier</VerifierButton>
            </p>
          ) : <p style={{ marginLeft: '2em' }}>Le contrôle de l'immigration*</p>
        }

        <h3>2. L'« éducation» est une préoccupation pour quel <b>camp politique</b>?{status.comprehension.q2 ? '✅': ''}</h3>
        {
          !status.comprehension.q2 ? (
            <p>
              <RadioGroup value={answer.q2} onChange={(e) => setAnswer({ ...answer, q2: e.target.value})}>
                <Radio value={1}>La droite</Radio>
                <Radio value={2}>La gauche</Radio>
              </RadioGroup>
              <VerifierButton
                type='primary'
                onClick={() => {
                  if (answer.q2 === 2) {
                    setModalInfo({ title: 'question2', content: 'ok', visible: true })
                    setStatus('comprehension', { ...status.comprehension, q2: true })
                  } else {
                    setModalInfo({ title: 'question2', content: 'non', visible: true })
                  }
                }}
              >Vérifier</VerifierButton>
            </p>
          ) : <p style={{ marginLeft: '2em' }}>La gauche</p>
        }

        <h3>3. « Le pauvreté et les inégalités sociales» sont une grande inquiétude pour <b>parti politique</b>?{status.comprehension.q3 ? '✅': ''}</h3>
        {
          !status.comprehension.q3 ? (
            <p>
              <RadioGroup value={answer.q3} onChange={(e) => setAnswer({ ...answer, q3: e.target.value})}>
                <Radio value={1}>La Front National (Rassemblement National)</Radio>
                <Radio value={2}>Le Parti Socialiste</Radio>
              </RadioGroup>
              <VerifierButton
                type='primary'
                onClick={() => {
                  if (answer.q3 === 2) {
                    setModalInfo({ title: 'question3', content: 'ok', visible: true })
                    setStatus('comprehension', { ...status.comprehension, q3: true })
                  } else {
                    setModalInfo({ title: 'question3', content: 'non', visible: true })
                  }
                }}
              >Vérifier</VerifierButton>
            </p>
          ) : <p style={{ marginLeft: '2em' }}>Le Parti Socialiste</p>
        }

        <h3>4. Quel mot <b>n'</b>est <b>pas</b> un synonyme de « clivage»?{status.comprehension.q4 ? '✅': ''}</h3>
        {
          !status.comprehension.q4 ? (
            <p>
              <RadioGroup value={answer.q4} onChange={(e) => setAnswer({ ...answer, q4: e.target.value})}>
                <Radio value={1}>une scission</Radio>
                <Radio value={2}>une séparation</Radio>
                <Radio value={3}>une coalition</Radio>
              </RadioGroup>
              <VerifierButton
                type='primary'
                onClick={() => {
                  if (answer.q4 === 3) {
                    setModalInfo({ title: 'question4', content: 'ok', visible: true })
                    setStatus('comprehension', { ...status.comprehension, q4: true })
                  } else {
                    setModalInfo({ title: 'question4', content: 'non', visible: true })
                  }
                }}
              >Vérifier</VerifierButton>
            </p>
          ) : <p style={{ marginLeft: '2em' }}>une coalition</p>
        }
        <h3>5. Quel est votre objectif final?{status.comprehension.q5 ? '✅': ''}</h3>
        {
          !status.comprehension.q5 ? (
            <p>
              <RadioGroup value={answer.q5} onChange={(e) => setAnswer({ ...answer, q5: e.target.value})}>
                <Radio value={1}>Choisir un candidat</Radio>
                <Radio value={2}>Se porter candidat</Radio>
              </RadioGroup>
              <VerifierButton
                type='primary'
                onClick={() => {
                  if (answer.q5 === 2) {
                    setModalInfo({ title: 'question5', content: 'ok', visible: true })
                    setStatus('comprehension', { ...status.comprehension, q5: true })
                  } else {
                    setModalInfo({ title: 'question5', content: 'non', visible: true })
                  }
                }}
              >Vérifier</VerifierButton>
            </p>
          ) : <p style={{ marginLeft: '2em' }}>Se porter candidat</p>
        }
      </div>
    </>
  )
}

export default Comporehension
