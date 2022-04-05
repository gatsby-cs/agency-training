import { PageProps } from 'gatsby'
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import Container from '../components/container/container'
import Layout from '../components/layout/layout'

import * as styles from '../styles/pages/form.module.scss'

const Form: React.FC<PageProps> = () => {
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(`/api/form`, {
      method: `POST`,
      body: JSON.stringify({ name }),
      headers: {
        'content-type': `application/json`,
      },
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(`response from API:`, body)
        setResponse(body)
        setIsLoading(false)
      })
  }

  return (
    <Layout>
      <Container>
        <h1>Form</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              className={styles.input}
              value={name}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" className={styles.button} />
        </form>
        <h2>Response</h2>
        <span>Response from server: {isLoading ? 'Loading...' : response}</span>
      </Container>
    </Layout>
  )
}

export default Form
