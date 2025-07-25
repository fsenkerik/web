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
import styled from './style'

// Define schema for EmailJS configuration
export const emailjsParamsSchema = z.object({
  serviceId: z.string().min(1),
  templateId: z.string().min(1),
  publicKey: z.string().min(1),
})

/*
Define EmailJS configuration
Make sure the values are replaced with your own EmailJS credentials.
Read the documentation for more information
*/
const emailjsParams = {
  serviceId: 'service_g6pbylj',
  templateId: 'template_4q9vmxs',
  publicKey: 'st9Y8CHA280rYb6B6',
}

// Define initial state
const initialState = {
  submit: {
    children: 'Odeslat',
    css: css``,
    disabled: false,
  },
  feedback: {
    css: css`
      display: none !important;
    `,
  },
}

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      // Return loading state
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
      // Return success state
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
      // Return failure state
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
      return initialState
  }
}

const Contact = (props) => {
  // Ref to store form DOM element
  const form = useRef()

  // State management with reducer
  const [state, dispatch] = useReducer(stateReducer, initialState)

  // Validate EmailJS params
  emailjsParamsSchema.parse(emailjsParams)

  const sendEmail = (e) => {
    e.preventDefault()

    // Vlastní validace
    const formData = new FormData(form.current)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    if (!name || !email || !subject || !message) {
      Swal.fire({
        icon: 'warning',
        title: 'Vyplňte všechna pole!',
        text: 'Prosím, vyplňte všechna pole formuláře.',
      })
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'warning',
        title: 'Neplatný email!',
        text: 'Zadejte prosím platnou emailovou adresu.',
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
            title: 'Zpráva odeslána!',
            text: 'Děkuji za zprávu, ozvu se co nejdříve.',
          })
          dispatch({ type: 'success' })
          form.current.reset()
          setTimeout(() => {
            dispatch({ type: null })
          }, 6000)
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.error(error)
          Swal.fire({
            icon: 'error',
            title: 'Chyba při odesílání',
            text: 'Zprávu se nepodařilo odeslat. Zkuste to prosím později.',
          })
          dispatch({ type: 'failure' })
          setTimeout(() => {
            dispatch({ type: null })
          }, 6000)
        },
      )
  }

  return (
    <SectionWrapper
      css={styled.Contact}
      altBg={true}
      headerData={{
        title: 'Kontaktujte mě',
        description: 'Neváhej mě kdykoli kontaktovat. Rád pomohu s projektem.',
      }}
      {...props}
    >
      <Row>
        <Col xs='12'>
          {/* Form */}
          <Form onSubmit={sendEmail} ref={form}>
            <Row>
              {/* Form fields */}
              <Form.Group
                className='_group'
                as={Col}
                md='6'
                xs='12'
                controlId='formName'
              >
                <Form.Control type='text' placeholder='Jméno' name='name' />
              </Form.Group>

              <Form.Group
                className='_group'
                as={Col}
                md='6'
                xs='12'
                controlId='formEmail'
              >
                <Form.Control type='text' placeholder='Email' name='email' />
              </Form.Group>

              <Form.Group
                className='_group'
                as={Col}
                xs='12'
                controlId='formSubject'
              >
                <Form.Control
                  type='text'
                  placeholder='O co se jedná'
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
                  placeholder='Zpráva'
                  name='message'
                />
              </Form.Group>

              <Col xs='12'>
                {/* Submit button */}
                <Button className='_submit' type='submit' {...state.submit} />

                {/* Submission Feedback */}
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
