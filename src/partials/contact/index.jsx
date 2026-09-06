/*
This is the Contact section. The contact form uses EmailJS API
to send emails: https://www.emailjs.com
*/

import React, { useRef, useReducer } from 'react'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import * as z from 'zod'
import { css } from '@emotion/react'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import { useLanguage } from 'root/src/context/LanguageContext'
import styled from './style'

export const emailjsParamsSchema = z.object({
  serviceId: z.string().min(1),
  templateId: z.string().min(1),
  publicKey: z.string().min(1),
})

const emailjsParams = {
  serviceId: 'service_g6pbylj',
  templateId: 'template_4q9vmxs',
  publicKey: 'st9Y8CHA280rYb6B6',
}

const buildInitialState = (submitLabel) => ({
  submit: {
    children: submitLabel,
    css: css``,
    disabled: false,
  },
  feedback: {
    css: css`
      display: none !important;
    `,
  },
})

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        submit: {
          children: 'Wait...',
          css: css`
            background-color: #222 !important;
            border-color: #222 !important;
          `,
          disabled: true,
        },
        feedback: {
          css: css`
            display: none !important;
          `,
        },
      }
    case 'success':
      return {
        submit: {
          children: 'Success',
          css: css`
            background-color: #28a745 !important;
            border-color: #28a745 !important;
          `,
          disabled: true,
        },
        feedback: {
          children: 'Thank you for your message. It has been sent.',
          css: css`
            color: #28a745;
            display: block !important;
          `,
        },
      }
    case 'failure':
      return {
        submit: {
          children: 'Error',
          css: css`
            background-color: #dc3545 !important;
            border-color: #dc3545 !important;
          `,
          disabled: true,
        },
        feedback: {
          children: '',
          css: css`
            color: #dc3545;
            display: block !important;
          `,
        },
      }
    default:
      return action.initial || state
  }
}

const Contact = (props) => {
  const form = useRef()
  const { t } = useLanguage()
  const c = t.contact

  const [state, dispatch] = useReducer(
    stateReducer,
    buildInitialState(c.submitBtn),
  )

  emailjsParamsSchema.parse(emailjsParams)

  const sendEmail = (e) => {
    e.preventDefault()

    const formData = new FormData(form.current)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    if (!name || !email || !subject || !message) {
      Swal.fire({
        icon: 'warning',
        title: c.validation.missingFields.title,
        text: c.validation.missingFields.text,
      })
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'warning',
        title: c.validation.invalidEmail.title,
        text: c.validation.invalidEmail.text,
      })
      return
    }

    dispatch({ type: 'loading' })

    emailjs
      .sendForm(
        emailjsParams.serviceId,
        emailjsParams.templateId,
        form.current,
        emailjsParams.publicKey,
      )
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: c.validation.success.title,
            text: c.validation.success.text,
          })
          dispatch({ type: 'success' })
          form.current.reset()
          setTimeout(() => {
            dispatch({ type: null, initial: buildInitialState(c.submitBtn) })
          }, 6000)
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.error(error)
          Swal.fire({
            icon: 'error',
            title: c.validation.error.title,
            text: c.validation.error.text,
          })
          dispatch({ type: 'failure' })
          setTimeout(() => {
            dispatch({ type: null, initial: buildInitialState(c.submitBtn) })
          }, 6000)
        },
      )
  }

  return (
    <SectionWrapper
      css={styled.Contact}
      altBg={true}
      headerData={{
        title: c.sectionTitle,
        description: c.sectionDesc,
      }}
      {...props}
    >
      <Row>
        <Col xs='12'>
          <Form onSubmit={sendEmail} ref={form}>
            <Row>
              <Form.Group
                className='_group'
                as={Col}
                md='6'
                xs='12'
                controlId='formName'
              >
                <Form.Control
                  type='text'
                  placeholder={c.namePlaceholder}
                  name='name'
                />
              </Form.Group>

              <Form.Group
                className='_group'
                as={Col}
                md='6'
                xs='12'
                controlId='formEmail'
              >
                <Form.Control
                  type='text'
                  placeholder={c.emailPlaceholder}
                  name='email'
                />
              </Form.Group>

              <Form.Group
                className='_group'
                as={Col}
                xs='12'
                controlId='formSubject'
              >
                <Form.Control
                  type='text'
                  placeholder={c.subjectPlaceholder}
                  name='subject'
                />
              </Form.Group>

              <Form.Group
                className='_group'
                as={Col}
                xs='12'
                controlId='formMessage'
              >
                <Form.Control
                  as='textarea'
                  rows='5'
                  placeholder={c.messagePlaceholder}
                  name='message'
                />
              </Form.Group>

              <Col xs='12'>
                <Button className='_submit' type='submit' {...state.submit} />
                <p className='_feedback' {...state.feedback} />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Contact
