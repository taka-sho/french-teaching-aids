import * as React from 'react'
import { Button, Modal } from 'antd'
import Styled from 'styled-components'
import * as ReactCookie from 'react-cookie'
import { Typography, Card, CardContent } from '@material-ui/core'

const QuestionParagraph = Styled.p`
  margin-left: 2em;
  font-size: 1.4em;
`
const QuestionInput = Styled.input`
  margin: 0 0.3em;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  text-align: center;
`

const VerifierButton = Styled(Button)`
  margin-left: 1em;
`

const T = Styled(Typography)`
  margin-top: 0.3em !important;
  margin-bottom: 0.3em !important;
`

const Subjonctif: React.SFC<any> = () => {
  const [
    answer,
    setAnswer
  ] = React.useState({ q1: '', q2: '', q3: '', q4: '', q5: '', q6: '' })
  const [
    status,
    setStatus
  ] = ReactCookie.useCookies([ 'subjonctifStatus' ])

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
        backgroundColor: '#90caf9'
      }} />
      {/* <Button
        onClick={() => setStatus('subjonctifStatus', { q1: false, q2: false, q3: false, q4: false, q5: false, q6: false, })}
      >reset</Button> */}
      <Modal
        title={modalInfo.title}
        visible={modalInfo.visible}
        onOk={() => setModalInfo({ ...modalInfo, visible: false })}
        onCancel={() => setModalInfo({ ...modalInfo, visible: false })}
      >
        {modalInfo.content}
      </Modal>

      <Typography variant='h2'>Le subjonctif {Object.keys(status.subjonctifStatus).filter(key => status.subjonctifStatus[key]).length === 6 ? '✅' : ''}</Typography>
      <Card style={{ margin: '2em 0'}}>
        <CardContent>
            <T>On utilise le subjonctif pour exprimer beaucoup de choses dans la vie quotidienne :
            un souhait (sauf « espérer »), une volonté, une obligation, un ordre, une opinion à la forme négative, une émotion, un doute, une possibilité, une nécessité...
            <br/><br/>
            On utilise le subjonctif avec le verbe de la proposition subordonnée, qui suit souvent « que » :
            <ul>
              <li>Je veux <u>que vous fassiez</u> vos devoirs.  (-> volonté)</li>
              <li>Je ne pense pas <u>qu’il vienne</u>. (-> opinion à la forme négative)</li>
            </ul>
            </T>
        </CardContent>
      </Card>
      <div style={{ marginLeft: '1em' }}>
        <h3>1. pouvoir {status.subjonctifStatus.q1 ? '✅': ''}</h3>
        <QuestionParagraph>
          Il fault absolument que l'Etat
          {
            !status.subjonctifStatus.q1 ? (
              <QuestionInput
                value={answer.q1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer({...answer, q1: e.target.value })}
                placeholder=''
              />
            ) : <span><b> puisse </b></span>
          }
          aider tout le monde.
          {
            status.subjonctifStatus.q1 ||
            <VerifierButton
              type='primary'
              onClick={() => {
                if (answer.q1 === 'puisse') {
                  setModalInfo({ title: 'question1', content: 'ok', visible: true })
                  
                  setStatus('subjonctifStatus', { ...status.subjonctifStatus, q1: true })
                } else {
                  setModalInfo({ title: 'question1', content: 'non', visible: true })
                }
              }}
            >Vérifier</VerifierButton>
          }
          
        </QuestionParagraph>

        <h3>2. être {status.subjonctifStatus.q2 ? '✅': ''}</h3>
        <QuestionParagraph>
          Ce serait bien que la réussite sociale ne
          {
            !status.subjonctifStatus.q2 ? (
            <QuestionInput
              value={answer.q2}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer({...answer, q2: e.target.value })}
              placeholder=''
            />
            ) : <span><b> soit </b></span>
          }
          plus une priorité.
          {
            status.subjonctifStatus.q2 ||
            <VerifierButton
              type='primary'
              onClick={() => {
                if (answer.q2 === 'soit') {
                  setModalInfo({ title: 'question2', content: 'ok', visible: true })
                  setStatus('subjonctifStatus', { ...status.subjonctifStatus, q2: true })
                } else {
                  setModalInfo({ title: 'question2', content: 'non', visible: true })
                }
              }}
            >Vérifier</VerifierButton>
          }
        </QuestionParagraph>

        <h3>3. envoyer {status.subjonctifStatus.q3 ? '✅': ''}</h3>
        <QuestionParagraph>
          Je voudrais que vous
          {
            !status.subjonctifStatus.q3 ? (
              <QuestionInput
                value={answer.q3}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer({...answer, q3: e.target.value })}
                placeholder=''
              />
            ) : <span><b> envoyiez </b></span>
          }
          cette lettre le plus rapidement possible.
          {
            status.subjonctifStatus.q3 ||
            <VerifierButton
              type='primary'
              onClick={() => {
                if (answer.q3 === 'envoyiez') {
                  setModalInfo({ title: 'question3', content: 'ok', visible: true })
                  setStatus('subjonctifStatus', { ...status.subjonctifStatus, q3: true })
                } else {
                  setModalInfo({ title: 'question3', content: 'non', visible: true })
                }
              }}
            >Vérifier</VerifierButton>
          }
        </QuestionParagraph>

        <h3>4. faire {status.subjonctifStatus.q4 ? '✅': ''}</h3>
        <QuestionParagraph>
          Quoi que tu
          {
            !status.subjonctifStatus.q4 ? (
              <QuestionInput
                value={answer.q4}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer({...answer, q4: e.target.value })}
                placeholder=''
              />
            ) : <b> fasses</b>
          }
          , je te soutiendrai.
          {
            status.subjonctifStatus.q4 ||
            <VerifierButton
              type='primary'
              onClick={() => {
                if (answer.q4 === 'fasses') {
                  setModalInfo({ title: 'question4', content: 'ok', visible: true })
                  setStatus('subjonctifStatus', { ...status.subjonctifStatus, q4: true })
                } else {
                  setModalInfo({ title: 'question4', content: 'non', visible: true })
                }
              }}
            >Vérifier</VerifierButton>
          }
        </QuestionParagraph>

        <h3>5. être {status.subjonctifStatus.q5 ? '✅': ''}</h3>
        <QuestionParagraph>
          Bien que vous
          {
            !status.subjonctifStatus.q5 ? (
              <QuestionInput
                value={answer.q5}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer({...answer, q5: e.target.value })}
                placeholder=''
              />
            ) : <b> soyez </b>
          }
          fatigué, il faut continuer encore un peu.
          {
            status.subjonctifStatus.q5 ||
            <VerifierButton
              type='primary'
              onClick={() => {
                if (answer.q5 === 'soyez') {
                  setModalInfo({ title: 'question5', content: 'ok', visible: true })
                  setStatus('subjonctifStatus', { ...status.subjonctifStatus, q5: true })
                } else {
                  setModalInfo({ title: 'question5', content: 'non', visible: true })
                }
              }}
            >Vérifier</VerifierButton>
          }
        </QuestionParagraph>

        <h3>6. partir {status.subjonctifStatus.q6 ? '✅': ''}</h3>
        <QuestionParagraph>
          Je suis heureux que nous
          {
            !status.subjonctifStatus.q6 ? (
              <QuestionInput
                value={answer.q6}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer({...answer, q6: e.target.value })}
                placeholder=''
              />
            ) : <b> partions </b>
          }
          en vacancee la semaine prochaine.
          {
            status.subjonctifStatus.q6 ||
            <VerifierButton
              type='primary'
              onClick={() => {
                if (answer.q6 === 'partions') {
                  setModalInfo({ title: 'question6', content: 'ok', visible: true })
                  setStatus('subjonctifStatus', { ...status.subjonctifStatus, q6: true })
                } else {
                  setModalInfo({ title: 'question6', content: 'non', visible: true })
                }
              }}
            >Vérifier</VerifierButton>
          }
        </QuestionParagraph>
      </div>
    </>

  )
}

export default Subjonctif
